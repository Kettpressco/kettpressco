import { calculatePrice } from "./calculatePrice.js";

/**
 * Converts the cart into Stripe-ready line items.
 * Stripe expects the amount in the smallest currency unit (pence).
 */
export const createStripePayload = (cart = []) => {
  return cart.map((item) => {
    const unitPrice =
      Number(item.price) ||
      calculatePrice(item.product || item, {
        quantity: 1,
        ...item.options,
      });

    return {
      name: item.name || item.product?.name || "Custom Printed Garment",
      quantity: Number(item.quantity || 1),
      amount: Math.round(unitPrice * 100),
      currency: "gbp",

      metadata: {
        size: item.size || "",
        colour: item.colour || "",
        artwork: item.artworkUrl || "",
      },
    };
  });
};