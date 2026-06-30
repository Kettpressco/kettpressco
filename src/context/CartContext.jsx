import { createContext, useContext, useEffect, useState } from "react";


// Create Cart Context
const CartContext = createContext();


// Cart Provider
export function CartProvider({ children }) {

  const [cart, setCart] = useState(() => {

    const savedCart = localStorage.getItem("kettpress-cart");

    return savedCart ? JSON.parse(savedCart) : [];

  });


  // Save cart whenever it changes
  useEffect(() => {

    localStorage.setItem(
      "kettpress-cart",
      JSON.stringify(cart)
    );

  }, [cart]);



  // Add product to cart
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
                quantity: item.quantity + product.quantity
              }

            : item
        );

      }


      return [
        ...currentCart,
        product
      ];

    });

  };



  // Remove product
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



  // Update quantity
  const updateQuantity = (
    id,
    size,
    colour,
    quantity
  ) => {


    if (quantity < 1) return;


    setCart((currentCart) =>

      currentCart.map((item) =>

        item.id === id &&
        item.size === size &&
        item.colour === colour

          ? {
              ...item,
              quantity
            }

          : item

      )

    );

  };



  // Empty cart
  const clearCart = () => {

    setCart([]);

  };



  // Total number of items
  const cartCount = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );



  // Total price
  const cartTotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );



  return (

    <CartContext.Provider

      value={{

        cart,

        addToCart,

        removeFromCart,

        updateQuantity,

        clearCart,

        cartCount,

        cartTotal

      }}

    >

      {children}

    </CartContext.Provider>

  );

}



// Custom hook
export function useCart(){

  return useContext(CartContext);

}