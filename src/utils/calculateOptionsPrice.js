import { PRICING } from "../config/pricing.js";

/**
 * Calculate the cost of all selected print/artwork options.
 */
export const calculateOptionsPrice = (options = {}) => {
  let extra = 0;

  if (options.backPrint) {
    extra += Number(PRICING.printing.back);
  }

  if (options.sleevePrint) {
    extra += Number(PRICING.printing.sleeve);
  }

  if (options.oversizedPrint) {
    extra += Number(PRICING.printing.oversized);
  }

  if (options.artworkEdit) {
    extra += Number(PRICING.artwork.edit);
  }

  if (options.newArtwork) {
    extra += Number(PRICING.artwork.new);
  }

  return Number(extra.toFixed(2));
};