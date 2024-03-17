import React, { createContext, useState, useContext, useCallback } from 'react';

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchProducts = useCallback(async (categoryId) => {
    setLoading(true);
    try {
   // API URL is correct. 
   const response = await fetch(`http://localhost:8080/api/categories/${categoryId}/products`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []); 

  const value = {
    products,
    loading,
    error,
    fetchProducts,
  };

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};
