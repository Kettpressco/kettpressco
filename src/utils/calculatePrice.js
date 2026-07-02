// src/utils/calculatePrice.js
import { PRICING } from "../config/pricing";

/**
 * Calculates price for ONE product with selected options
 */
export const calculatePrice = (product, options = {}) => {
  if (!product) return 0;

  const {
    quantity = 1,
    extras = {}
  } = options;

  // -----------------------------
  // Base product price (from Supabase / PenCarrie import)
  // -----------------------------
  let price = Number(product.price || 0);

  // -----------------------------
  // Add optional extras (per item)
  // -----------------------------
  if (extras.backPrint) price += PRICING.printing.back;
  if (extras.sleevePrint) price += PRICING.printing.sleeve;
  if (extras.oversizedPrint) price += PRICING.printing.oversized;

  if (extras.artworkEdit) price += PRICING.artwork.edit;
  if (extras.newArtwork) price += PRICING.artwork.new;

  // -----------------------------
  // Multiply by quantity
  // -----------------------------
  return Number((price * quantity).toFixed(2));
};