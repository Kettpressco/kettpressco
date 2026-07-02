import { calculatePrice } from "./calculatePrice";

/**
 * Converts cart into Stripe-ready line items
 */
export const createStripePayload = (cart = []) => {
  return cart.map((item) => {
    const unitPrice = calculatePrice(item.product, {
      quantity: 1,
      ...item.options,
    });

    return {
      name: item.product.name,
      quantity: item.quantity,
      amount: Math.round(unitPrice * 100), // Stripe uses pence
      currency: "gbp",
    };
  });
};