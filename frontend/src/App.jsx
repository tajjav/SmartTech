import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import CheckoutPage from './pages/CheckoutPage';
import AboutUsPage from './pages/AboutUsPage';
import ProductDetailPage from './pages/ProductDetailPage';

import GuestPage from './pages/GuestPage';

import ShoppingCartPage from './pages/ShoppingCartPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { ProductProvider } from './contexts/ProductContext'; 
import { StoreProvider } from './contexts/StoreContext'; 
import { AuthProvider } from './contexts/AuthorizationContext';

import FloatingChatButton from './components/FloatingChatButton';
import Chat from './components/Chat';
import { Container } from '@mui/material';
//import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { ThemeProvider } from './contexts/ThemeContext';
import ClearancePage from './pages/ClearancePage';

import OrderPage from './pages/OrderPage';
import CheckoutSuccess from './pages/CheckoutSuccess';
import NotFound from './pages/NotFound';
//import { loadStripe } from '@stripe/stripe-js';
//import { Elements } from '@stripe/react-stripe-js';




function App() {
  return (
    <ThemeProvider> 
      <AuthProvider> 
        <StoreProvider>
          <ProductProvider>
            <Router>
              <NavBar />
        
              <Routes>
                <Route path='*' element={<NotFound/>} />
                <Route path="/" element={<HomePage />} />
                <Route path="/category/:categoryId" element={<CategoryPage />} />
                
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/product/:productId" element={<ProductDetailPage />} />
                <Route path="/cart" element={<ShoppingCartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path='/checkout-success' element={<CheckoutSuccess/>} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/guestpage" element={<GuestPage />} />
                      <Route path="/orderpage" element={<OrderPage />} />
                            <Route path="/clearance" element={<ClearancePage />} />





              </Routes>
              <FloatingChatButton /> 
              <Footer />
            </Router>
          </ProductProvider>
        </StoreProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
