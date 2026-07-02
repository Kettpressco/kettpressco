// src/config/pricing.js

export const PRICING = {
  // -----------------------------
  // Garment Margins
  // -----------------------------
  margins: {
    tshirt: 3.99,
    default: 5.00,
  },

  // -----------------------------
  // Printing Prices
  // -----------------------------
  printing: {
    standard: 4.99,
    back: 5.00,
    sleeve: 3.00,
    oversized: 5.00,
  },

  // -----------------------------
  // Artwork Services
  // -----------------------------
  artwork: {
    edit: 5.00,
    new: 20.00,
  },

  // -----------------------------
  // Bulk Discounts
  // -----------------------------
  bulk: {
    threshold: 10,
    discountPerItem: 3.30,
  },

  // -----------------------------
  // Minimum Selling Price
  // -----------------------------
  minimumPrice: 9.99,
};