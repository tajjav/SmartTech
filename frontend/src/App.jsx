import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
//import ClearancePage from './pages/ClearancePage';
import AboutUsPage from './pages/AboutUsPage';
import ProductDetailPage from './pages/ProductDetailPage';

import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

import GuestPage from './pages/GuestPage';
import OrderPage from './pages/OrderPage';

import { ProductProvider } from './contexts/ProductContext'; 
import { StoreProvider } from './contexts/StoreContext'; 



function App() {
  return (
    <StoreProvider>
    <ProductProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/guestpage" element={<GuestPage />} />
          <Route path="/orderpage" element={<OrderPage />} />

            
            



        </Routes>
        <Footer />
      </Router>
    </ProductProvider>
        </StoreProvider>
  );
}

export default App;
