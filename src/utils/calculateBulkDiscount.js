import { PRICING } from "../config/pricing";

export const calculateBulkDiscount = (cartItems = []) => {
  let totalQty = 0;

  cartItems.forEach((item) => {
    totalQty += item.quantity || 0;
  });

  if (totalQty >= PRICING.bulk.threshold) {
    return totalQty * PRICING.bulk.discountPerItem;
  }

  return 0;
};