import { PRICING } from "../config/pricing";

/**
 * Calculates extra print + artwork costs
 */
export const calculateOptionsPrice = (options = {}) => {
  let extra = 0;

  if (options.backPrint) extra += PRICING.printing.back;
  if (options.sleevePrint) extra += PRICING.printing.sleeve;
  if (options.oversizedPrint) extra += PRICING.printing.oversized;

  if (options.artworkEdit) extra += PRICING.artwork.edit;
  if (options.newArtwork) extra += PRICING.artwork.new;

  return extra;
};