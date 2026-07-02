import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

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
  const sig = req.headers["stripe-signature"];

  let event;

  try {
    const buf = await buffer(req);

    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Webhook signature error:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // ✅ WHEN PAYMENT SUCCEEDS
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    const sessionId = session.id;

    console.log("Payment successful:", sessionId);

    // 🔥 UPDATE SUPABASE ORDER
    const { error } = await supabase
      .from("orders")
      .update({
        paid: true,
        payment_status: "paid"
      })
      .eq("stripe_session_id", sessionId);

    if (error) {
      console.error("Supabase update error:", error);
    }
  }

  res.json({ received: true });
}

// helper for buffer (needed for Stripe)
import { buffer } from "micro";