import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";
import { calculateCartTotal } from "../src/utils/calculateCartTotal.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error("Missing STRIPE_SECRET_KEY");
    }

    const { cart = [], customer = {} } = req.body;

    if (!cart.length) {
      return res.status(400).json({ error: "Cart is empty" });
    }

    const line_items = cart.map((item) => {
      const unitAmount = Math.round(Number(item.price || 0) * 100);

      if (!unitAmount || unitAmount < 50) {
        throw new Error(`Invalid price for ${item.name || "item"}`);
      }

      return {
        price_data: {
          currency: "gbp",
          product_data: {
            name: item.name || item.product?.name || "Custom Printed Garment",
            description: `${item.size || ""} - ${item.colour || ""}`,
            metadata: {
              size: item.size || "",
              colour: item.colour || "",
              artworkUrl: item.artworkUrl || "",
            },
          },
          unit_amount: unitAmount,
        },
        quantity: Number(item.quantity || 1),
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: "https://www.kettpressco.com/order-success",
      cancel_url: "https://www.kettpressco.com/cart",
      customer_email: customer.email || undefined,
      metadata: {
        customer_name: customer.name || "",
        customer_phone: customer.phone || "",
        postcode: customer.postcode || "",
      },
    });

    const { error: orderError } = await supabase.from("orders").insert([
      {
        customer_name: customer.name || "",
        customer_email: customer.email || "",
        customer_phone: customer.phone || "",
        customer_address: customer.address || "",
        customer_city: customer.city || "",
        customer_postcode: customer.postcode || "",
        total: calculateCartTotal(cart),
        items: cart,
        stripe_session_id: session.id,
        paid: false,
      },
    ]);

    if (orderError) {
      console.error("SUPABASE ORDER ERROR:", orderError);
    }

    return res.status(200).json({
      id: session.id,
      url: session.url,
    });
  } catch (error) {
    console.error("CHECKOUT SESSION ERROR:", error);

    return res.status(500).json({
      error: error.message,
      details: error.raw?.message || error.details || "No extra details",
    });
  }
}