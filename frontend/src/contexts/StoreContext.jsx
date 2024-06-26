import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Context
const StoreContext = createContext();

// Initial State
const initialState = { cart: [], products: [] };

// Action Types
const actionTypes = {
  SET_CART: 'SET_CART',
  SET_PRODUCTS: 'SET_PRODUCTS',
  ADD_TO_CART: 'ADD_TO_CART',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
};

// Reducer
function cartReducer(state, action) {
  switch (action.type) {
    case actionTypes.SET_CART:
      // Combine the cart items with product details

      console.log("cartitem w/details", action.payload)
      return { ...state, cart: action.payload };
    case actionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    case actionTypes.ADD_TO_CART:

      return { ...state, cart: [...state.cart, action.payload] };
    case actionTypes.UPDATE_QUANTITY:
      const updatedCart = state.cart.map(item =>
        item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
      );
      console.log("Cart after quantity update", updatedCart);
      return { ...state, cart: updatedCart };
    case actionTypes.REMOVE_FROM_CART:
      const newCart = state.cart.filter(item => item.id !== action.payload.id);
      console.log("Cart after removal", newCart);
      return { ...state, cart: newCart };
    case actionTypes.CLEAR_CART:

      return { ...state, cart: [] };
    default:
      return state;
  }
}

// Store Provider
export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);


  const fetchCartData = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}api/line_items`);
      if (!response.ok) throw new Error('Failed to fetch cart data');
      const cartData = await response.json();
      dispatch({ type: actionTypes.SET_CART, payload: cartData });
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };

  // Effect to fetch product and cart data
  useEffect(() => {
    fetchCartData();
  }, []);


  async function addToCart(item) {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}api/line_items`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          product_id: item.product_id,
          quantity: item.quantity,

        })
      });
      if (!response.ok) throw new Error('Failed to add item to cart');
      const newItem = await response.json();
      dispatch({ type: actionTypes.ADD_TO_CART, payload: newItem });
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  }

  async function updateQuantity(productId, quantity) {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}api/line_items/${productId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantity })
      });
      if (!response.ok) throw new Error('Failed to update item quantity');
      fetchCartData();
      // Refresh cart data to reflect the update
    } catch (error) {
      console.error('Error updating item quantity:', error);
    }
  }

  async function removeFromCart(productId) {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}api/line_items/${productId}`, {
        method: 'DELETE'
      });
      if (!response.ok) throw new Error('Failed to remove item from cart');
      fetchCartData();
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  }

  async function clearCart() {
    //does backend have a clear option???
    dispatch({ type: actionTypes.CLEAR_CART });
  }

  // Value provided through context
  const value = {
    cart: state.cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart
  };

  return <StoreContext.Provider value={{ ...state, ...value }}>{children}</StoreContext.Provider>;
};

// Custom hook to use store
export function useStore() {
  return useContext(StoreContext);
}
