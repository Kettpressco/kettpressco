import { calculatePrice } from "./calculatePrice.js";

/**
 * Subtotal before bulk discount
 */
export const calculateCartTotal = (cartItems = []) => {
  let total = 0;

  cartItems.forEach((item) => {
    const itemPrice =
      Number(item.price) ||
      calculatePrice(item.product || item, {
        quantity: item.quantity,
        ...item.options,
      });

    total += itemPrice * Number(item.quantity || 1);
  });

  return Number(total.toFixed(2));
};