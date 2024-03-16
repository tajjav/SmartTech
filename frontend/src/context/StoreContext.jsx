import React, { createContext, useContext, useState } from 'react';
import mockData from '../data/mockData'; // Adjust the import path as necessary

export const StoreContext = createContext(null);

export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
  // Example: Initialize cart with the first item from each category
  const initialCartItems = [
    { ...mockData.tvs[0], quantity: 1 },
    { ...mockData.laptops[0], quantity: 1 },
    { ...mockData.headphones[0], quantity: 1 },
    { ...mockData.smartphones[0], quantity: 1 },
    { ...mockData.tablets[0], quantity: 1 }
  ];

  const [cart, setCart] = useState(initialCartItems);

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.id === product.id);
      if (existingIndex !== -1) {
        // Update quantity if the product exists
        const updatedCart = [...prevCart];
        updatedCart[existingIndex].quantity += quantity;
        return updatedCart;
      } else {
        // Add new product to the cart
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) => prevCart.map((item) =>
      item.id === productId ? { ...item, quantity: Math.max(quantity, 0) } : item
    ));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.quantity * parseFloat(item.price.replace('$', '')), 0).toFixed(2);
  };

  return (
    <StoreContext.Provider value={{ cart, addToCart, updateQuantity, calculateTotal }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
