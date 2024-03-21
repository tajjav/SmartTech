import React, { createContext, useState, useContext } from 'react';

const AuthorizationContext = createContext();

export const useAuth = () => useContext(AuthorizationContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = async (email, password) => {
    try {
      console.log("Attempting to log in with URL:", `${import.meta.env.VITE_API_BASE_URL}api/users/login`);
      console.log("Email:", email, "Password:", password); 
     
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}api/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include', 
      });

      if (!response.ok) {
        const errorData = await response.text(); 
        throw new Error(errorData || 'Failed to log in.');
      }

      const data = await response.json();
      setCurrentUser(data); 
    } catch (error) {
      console.error("Login failed", error);
      throw error; 
    }
  };

  const register = async (name, email, password, is_admin = false) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}api/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password, 
          is_admin
        }),
      });

      if (!response.ok) {
        const errorData = await response.text(); 
        throw new Error(errorData || 'Failed to register.');
      }

      const data = await response.json();
      setCurrentUser(data); 
    } catch (error) {
      console.error("Registration failed", error);
      throw error; 
    }
  };



  const value = {
    currentUser,
    login,
    register,
    
  };

  return (
    <AuthorizationContext.Provider value={value}>
      {children}
    </AuthorizationContext.Provider>
  );
};