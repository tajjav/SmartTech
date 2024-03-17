import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  cart: [],
};

// Action types for ease of management
const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
};

// Reducer to handle state changes
function cartReducer(state, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
}

// Creating the context
const StoreContext = createContext();

// Context provider component
export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Function to add item to cart
  const addToCart = (item) => {
    dispatch({ type: actionTypes.ADD_TO_CART, payload: item });
  };

  // The value that will be provided to the components
  const value = { state, addToCart };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}



// Custom hook to use the store context
export function useStore() {
  return useContext(StoreContext);
}
