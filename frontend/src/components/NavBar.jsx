// NavBar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.scss';

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">SmartTech</Link>
      <div className="navbar-menu">
        <Link to="/" className="navbar-item">Home</Link>

        <div className="navbar-item" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
          Products
          {isDropdownOpen && (
            <div className="dropdown">
              <Link to="/category/tvs">TVs</Link>
              <Link to="/category/laptops">Laptops</Link>
              <Link to="/category/smartphones">Smartphones</Link>
              <Link to="/category/headphones">Headphones</Link>
              <Link to="/category/tablets">Tablets</Link>
            </div>
          )}
        </div>

        <Link to="/clearance" className="navbar-item">Clearance</Link>
      
        <Link to="/about" className="navbar-item">About Us</Link>
      </div>
    </nav>
  );
};

export default NavBar;