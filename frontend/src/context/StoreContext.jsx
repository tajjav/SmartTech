// src/context/StoreContext.js
import React, { createContext, useContext, useState } from 'react';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    setCartItems(currentItems => {
      const itemIndex = currentItems.findIndex(item => item.id === product.id);
      if (itemIndex > -1) {
        // Product already exists in cart, update quantity
        const updatedItems = [...currentItems];
        updatedItems[itemIndex].quantity += quantity;
        return updatedItems;
      }
      // Product not in cart, add as new item
      return [...currentItems, { ...product, quantity }];
    });
  };

  return (
    <StoreContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
