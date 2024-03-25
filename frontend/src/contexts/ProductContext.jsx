import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';

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
   const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}api/categories/${categoryId}/products`);

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

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_API_BASE_URL}api/products`)  
      .then(response => {
        console.log(`Response status: ${response.status}`);
        if (!response.ok) {
          return response.text().then(responseBody => {
            console.log(`Response body: ${responseBody}`);
            throw new Error('Network response was not ok');
          });
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        setError(error.message);
        console.error("Failed to fetch products:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  

  return <ProductContext.Provider value={{products,fetchProducts} }>{children}</ProductContext.Provider>;
};
