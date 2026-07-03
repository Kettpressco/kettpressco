import { createContext, useContext, useEffect, useState } from "react";

import { calculateCartTotal } from "../utils/calculateCartTotal";
import { calculateBulkDiscount } from "../utils/calculateBulkDiscount";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cartOpen, setCartOpen] = useState(false);

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("kettpress-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("kettpress-cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) =>
          item.id === product.id &&
          item.size === product.size &&
          item.colour === product.colour &&
          JSON.stringify(item.options) === JSON.stringify(product.options)
      );

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id &&
          item.size === product.size &&
          item.colour === product.colour &&
          JSON.stringify(item.options) === JSON.stringify(product.options)
            ? {
                ...item,
                quantity: item.quantity + product.quantity,
              }
            : item
        );
      }

      return [...currentCart, product];
    });

    setCartOpen(true);
  };

  const removeFromCart = (id, size, colour) => {
    setCart((currentCart) =>
      currentCart.filter(
        (item) =>
          !(item.id === id && item.size === size && item.colour === colour)
      )
    );
  };

  const updateQuantity = (id, size, colour, quantity) => {
    if (quantity < 1) return;

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id && item.size === size && item.colour === colour
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce(
    (total, item) => total + Number(item.quantity || 0),
    0
  );

  const subtotal = calculateCartTotal(cart);
  const discount = calculateBulkDiscount(cart);
  const total = subtotal - discount;

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,

        cartOpen,
        setCartOpen,

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