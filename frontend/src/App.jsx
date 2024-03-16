import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ClearancePage from './pages/ClearancePage';
import AboutUsPage from './pages/AboutUsPage';
import ProductDetailPage from './pages/ProductDetailPage';




function App() {
  return (
    <Router>
    <NavBar /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="/clearance" element={<ClearancePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/clearance" element={<ClearancePage />} />
        <Route path="/product/:productId" element={<ProductDetailPage />} />



        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;