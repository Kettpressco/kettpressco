import { calculatePrice } from "./calculatePrice";

/**
 * Subtotal before bulk discount
 */
export const calculateCartTotal = (cartItems = []) => {
  let total = 0;

  cartItems.forEach((item) => {
    const itemPrice = calculatePrice(item.product, {
      quantity: item.quantity,
      ...item.options,
    });

    total += itemPrice * item.quantity;
  });

  return Number(total.toFixed(2));
};