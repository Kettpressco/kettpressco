import { PRICING } from "../config/pricing";

export const calculatePrice = (product, options = {}) => {
  const basePrice = Number(
    product?.price ||
    product?.base_price ||
    product?.basePrice ||
    0
  );

  let price = basePrice;

  // standard print
  price += PRICING.printing.standard;

  // extras
  if (options.backPrint) price += PRICING.printing.back;
  if (options.sleevePrint) price += PRICING.printing.sleeve;
  if (options.oversizedPrint) price += PRICING.printing.oversized;

  // artwork
  if (options.artworkEdit) price += PRICING.artwork.edit;
  if (options.newArtwork) price += PRICING.artwork.new;

  if (price < PRICING.minimumPrice) {
    price = PRICING.minimumPrice;
  }

  return Number(price.toFixed(2));
};