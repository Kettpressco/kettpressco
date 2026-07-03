import { PRICING } from "../config/pricing.js";

/**
 * Calculates the final unit price for a product.
 * Includes:
 * - Base garment price
 * - Standard front print
 * - Optional print extras
 * - Artwork services
 * - Minimum price protection
 */

export const calculatePrice = (product = {}, options = {}) => {
  const basePrice = Number(
    product.price ??
      product.base_price ??
      product.basePrice ??
      0
  );

  let price = basePrice;

  // Standard front print
  price += Number(PRICING.printing.standard);

  // Optional print locations
  if (options.backPrint) {
    price += Number(PRICING.printing.back);
  }

  if (options.sleevePrint) {
    price += Number(PRICING.printing.sleeve);
  }

  if (options.oversizedPrint) {
    price += Number(PRICING.printing.oversized);
  }

  // Artwork services
  if (options.artworkEdit) {
    price += Number(PRICING.artwork.edit);
  }

  if (options.newArtwork) {
    price += Number(PRICING.artwork.new);
  }

  // Never go below minimum selling price
  if (price < Number(PRICING.minimumPrice)) {
    price = Number(PRICING.minimumPrice);
  }

  return Number(price.toFixed(2));
};