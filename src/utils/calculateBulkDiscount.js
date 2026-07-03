import { PRICING } from "../config/pricing.js";

export const calculateBulkDiscount = (cartItems = []) => {
  let totalQty = 0;

  cartItems.forEach((item) => {
    totalQty += Number(item.quantity || 0);
  });

  if (totalQty >= PRICING.bulk.threshold) {
    return Number(
      (totalQty * PRICING.bulk.discountPerItem).toFixed(2)
    );
  }

  return 0;
};