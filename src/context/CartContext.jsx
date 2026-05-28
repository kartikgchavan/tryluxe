import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("tryluxe-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("tryluxe-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  function addToCart(product, selectedSize, selectedColor) {
    const cartProduct = {
      cartId: `${product.id}-${selectedSize}-${selectedColor}`,
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      color: selectedColor,
      qty: 1,
    };

    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.cartId === cartProduct.cartId
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.cartId === cartProduct.cartId
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prevItems, cartProduct];
    });
  }

  function increaseQty(cartId) {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.cartId === cartId ? { ...item, qty: item.qty + 1 } : item
      )
    );
  }

  function decreaseQty(cartId) {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.cartId === cartId ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  }

  function removeFromCart(cartId) {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.cartId !== cartId)
    );
  }
  const clearCart = () => {
  setCartItems([]);
  localStorage.removeItem("tryluxe-cart");
};

  const cartCount = cartItems.reduce((total, item) => total + item.qty, 0);

  return (
    <CartContext.Provider
      value={{
  cartItems,
  addToCart,
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCart,
  cartCount,
}}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}