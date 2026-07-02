import { createContext, useContext, useEffect, useState } from "react";

import { calculateCartTotal } from "../utils/calculateCartTotal";
import { calculateBulkDiscount } from "../utils/calculateBulkDiscount";

// Create Cart Context
const CartContext = createContext();

// Hook
export const useCart = () => useContext(CartContext);

// Provider
export function CartProvider({ children }) {

  // -----------------------------
  // CART STATE (LOAD FROM LOCALSTORAGE)
  // -----------------------------
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("kettpress-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // -----------------------------
  // SAVE CART TO LOCALSTORAGE
  // -----------------------------
  useEffect(() => {
    localStorage.setItem("kettpress-cart", JSON.stringify(cart));
  }, [cart]);

  // -----------------------------
  // ADD TO CART
  // -----------------------------
  const addToCart = (product) => {
    setCart((currentCart) => {

      const existingItem = currentCart.find(
        (item) =>
          item.id === product.id &&
          item.size === product.size &&
          item.colour === product.colour
      );

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id &&
          item.size === product.size &&
          item.colour === product.colour
            ? {
                ...item,
                quantity: item.quantity + product.quantity,
              }
            : item
        );
      }

      return [...currentCart, product];
    });
  };

  // -----------------------------
  // REMOVE ITEM
  // -----------------------------
  const removeFromCart = (id, size, colour) => {
    setCart((currentCart) =>
      currentCart.filter(
        (item) =>
          !(
            item.id === id &&
            item.size === size &&
            item.colour === colour
          )
      )
    );
  };

  // -----------------------------
  // UPDATE QUANTITY
  // -----------------------------
  const updateQuantity = (id, size, colour, quantity) => {
    if (quantity < 1) return;

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id &&
        item.size === size &&
        item.colour === colour
          ? { ...item, quantity }
          : item
      )
    );
  };

  // -----------------------------
  // CLEAR CART
  // -----------------------------
  const clearCart = () => {
    setCart([]);
  };

  // -----------------------------
  // CART COUNT (for 🛒 badge)
  // -----------------------------
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // -----------------------------
  // PRICING (USE YOUR UTILS)
  // -----------------------------
 const subtotal = calculateCartTotal(cart);
const discount = calculateBulkDiscount(cart);
const total = subtotal - discount;
  // -----------------------------
  // PROVIDER VALUE
  // -----------------------------
  return (
    <CartContext.Provider
      value={{
        cart,

        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,

        cartCount,

        subtotal,
        discount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}