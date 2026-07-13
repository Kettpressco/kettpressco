import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";
import { buffer } from "micro";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return res.status(500).json({
      error: "Missing STRIPE_SECRET_KEY",
    });
  }

  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    return res.status(500).json({
      error: "Missing STRIPE_WEBHOOK_SECRET",
    });
  }

  if (!process.env.SUPABASE_URL) {
    return res.status(500).json({
      error: "Missing SUPABASE_URL",
    });
  }

  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(500).json({
      error: "Missing SUPABASE_SERVICE_ROLE_KEY",
    });
  }

  const signature = req.headers["stripe-signature"];

  if (!signature) {
    return res.status(400).json({
      error: "Missing Stripe signature",
    });
  }

  let event;

  try {
    const rawBody = await buffer(req);

    event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    console.error("STRIPE WEBHOOK SIGNATURE ERROR:", error.message);

    return res.status(400).send(
      `Webhook Error: ${error.message}`
    );
  }

  try {
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      console.log("Checkout completed:", session.id);

      const updates = {
        payment_status:
          session.payment_status === "paid"
            ? "paid"
            : "pending",

        stripe_payment_intent_id:
          typeof session.payment_intent === "string"
            ? session.payment_intent
            : session.payment_intent?.id || null,
      };

      const { data, error } = await supabase
        .from("orders")
        .update(updates)
        .eq("stripe_session_id", session.id)
        .select("id, order_number, payment_status");

      if (error) {
        console.error(
          "SUPABASE PAYMENT UPDATE ERROR:",
          error
        );

        return res.status(500).json({
          error: "Could not update order payment status",
          details: error.message,
        });
      }

      if (!data || data.length === 0) {
        console.error(
          "No order found for Stripe session:",
          session.id
        );

        return res.status(404).json({
          error: "Order not found",
        });
      }

      console.log("Order marked as paid:", data[0]);
    }

    if (event.type === "checkout.session.async_payment_succeeded") {
      const session = event.data.object;

      const { error } = await supabase
        .from("orders")
        .update({
          payment_status: "paid",

          stripe_payment_intent_id:
            typeof session.payment_intent === "string"
              ? session.payment_intent
              : session.payment_intent?.id || null,
        })
        .eq("stripe_session_id", session.id);

      if (error) {
        console.error(
          "ASYNC PAYMENT UPDATE ERROR:",
          error
        );

        return res.status(500).json({
          error: "Could not update asynchronous payment",
          details: error.message,
        });
      }
    }

    if (event.type === "checkout.session.async_payment_failed") {
      const session = event.data.object;

      const { error } = await supabase
        .from("orders")
        .update({
          payment_status: "failed",
        })
        .eq("stripe_session_id", session.id);

      if (error) {
        console.error(
          "FAILED PAYMENT UPDATE ERROR:",
          error
        );

        return res.status(500).json({
          error: "Could not mark payment as failed",
          details: error.message,
        });
      }
    }

    if (event.type === "charge.refunded") {
      const charge = event.data.object;

      const paymentIntentId =
        typeof charge.payment_intent === "string"
          ? charge.payment_intent
          : charge.payment_intent?.id;

      if (paymentIntentId) {
        const paymentStatus =
          charge.amount_refunded >= charge.amount
            ? "refunded"
            : "partially_refunded";

        const { error } = await supabase
          .from("orders")
          .update({
            payment_status: paymentStatus,
          })
          .eq(
            "stripe_payment_intent_id",
            paymentIntentId
          );

        if (error) {
          console.error(
            "REFUND UPDATE ERROR:",
            error
          );

          return res.status(500).json({
            error: "Could not update refund status",
            details: error.message,
          });
        }
      }
    }

    return res.status(200).json({
      received: true,
    });
  } catch (error) {
    console.error("STRIPE WEBHOOK ERROR:", error);

    return res.status(500).json({
      error: error.message || "Webhook processing failed",
    });
  }
}