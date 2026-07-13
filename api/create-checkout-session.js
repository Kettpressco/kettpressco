import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";
import { calculateCartTotal } from "../src/utils/calculateCartTotal.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

function createOrderNumber() {
  const timestamp = Date.now().toString().slice(-8);
  const random = Math.floor(100 + Math.random() * 900);

  return `KPC-${timestamp}-${random}`;
}

function collectArtworkUrls(cart) {
  const urls = [];

  cart.forEach((item) => {
    const possibleUrls = [
      item.artworkUrl,
      item.artwork_url,
      item.artwork,
      item.options?.artworkUrl,
      item.options?.artwork_url,
    ];

    possibleUrls.forEach((url) => {
      if (typeof url === "string" && url.trim()) {
        urls.push(url.trim());
      }
    });
  });

  return [...new Set(urls)];
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error("Missing STRIPE_SECRET_KEY");
    }

    if (!process.env.SUPABASE_URL) {
      throw new Error("Missing SUPABASE_URL");
    }

    if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY");
    }

    const { cart = [], customer = {} } = req.body || {};

    if (!Array.isArray(cart) || cart.length === 0) {
      return res.status(400).json({
        error: "Cart is empty",
      });
    }

    if (!customer.email) {
      return res.status(400).json({
        error: "Customer email is required",
      });
    }

    const total = Number(calculateCartTotal(cart));

    if (!Number.isFinite(total) || total <= 0) {
      throw new Error("Invalid cart total");
    }

    const orderNumber = createOrderNumber();
    const artworkUrls = collectArtworkUrls(cart);

    const line_items = cart.map((item) => {
      const itemName =
        item.name ||
        item.title ||
        item.product?.name ||
        item.product?.title ||
        "Custom Printed Garment";

      const unitPrice = Number(
        item.price ??
          item.unitPrice ??
          item.unit_price ??
          0
      );

      const unitAmount = Math.round(unitPrice * 100);
      const quantity = Math.max(1, Number(item.quantity || 1));

      if (!Number.isFinite(unitAmount) || unitAmount < 50) {
        throw new Error(`Invalid price for ${itemName}`);
      }

      return {
        price_data: {
          currency: "gbp",

          product_data: {
            name: itemName,

            description: [
              item.size ? `Size: ${item.size}` : "",
              item.colour || item.color
                ? `Colour: ${item.colour || item.color}`
                : "",
            ]
              .filter(Boolean)
              .join(" | "),

            metadata: {
              size: String(item.size || ""),
              colour: String(item.colour || item.color || ""),
            },
          },

          unit_amount: unitAmount,
        },

        quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",

      success_url:
        "https://www.kettpressco.com/order-success?session_id={CHECKOUT_SESSION_ID}",

      cancel_url:
        "https://www.kettpressco.com/cart",

      customer_email: customer.email,

      metadata: {
        order_number: orderNumber,
        customer_name: String(customer.name || ""),
        customer_phone: String(customer.phone || ""),
        postcode: String(customer.postcode || ""),
      },
    });

    const shippingAddress = {
      line1: customer.address || customer.addressLine1 || "",
      line2: customer.addressLine2 || "",
      city: customer.city || "",
      county: customer.county || "",
      postal_code: customer.postcode || "",
      country: customer.country || "United Kingdom",
    };

    const { error: orderError } = await supabase
      .from("orders")
      .insert([
        {
          order_number: orderNumber,

          customer_name: customer.name || "",
          customer_email: customer.email || "",
          customer_phone: customer.phone || "",

          shipping_address: shippingAddress,

          items: cart,
          artwork_urls: artworkUrls,

          subtotal: total,
          discount: 0,
          total,
          currency: "gbp",

          payment_status: "pending",
          order_status: "pending",

          stripe_session_id: session.id,

          customer_notes: customer.notes || null,

          delivery_method:
            customer.deliveryMethod || null,
        },
      ]);

    if (orderError) {
      console.error("SUPABASE ORDER ERROR:", orderError);

      /*
       * Stop checkout if the order cannot be recorded.
       * This avoids accepting a payment without creating
       * an order in your dashboard.
       */
      await stripe.checkout.sessions.expire(session.id);

      return res.status(500).json({
        error: "Could not save the order",
        details: orderError.message,
      });
    }

    return res.status(200).json({
      id: session.id,
      url: session.url,
      orderNumber,
    });
  } catch (error) {
    console.error("CHECKOUT SESSION ERROR:", error);

    return res.status(500).json({
      error: error.message || "Checkout failed",
      details:
        error.raw?.message ||
        error.details ||
        "No extra details",
    });
  }
}