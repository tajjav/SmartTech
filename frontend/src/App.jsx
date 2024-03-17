import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ClearancePage from './pages/ClearancePage';
import AboutUsPage from './pages/AboutUsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ShoppingCartPage from './pages/ShoppingCartPage'; 
import { StoreProvider } from './context/StoreContext'; 
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <StoreProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/clearance" element={<ClearancePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
        </Routes>
        <Footer />
      </Router>
    </StoreProvider>
  );
}

export default App;
