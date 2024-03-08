//NavBar
import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/NavBar.scss';

const NavBar = () => {
    return (
        <nav className="navbar">
           <div className="navbar-brand">SmartTech</div>
            <ul className="navbar-nav">    
            <li><Link to="/">Home</Link></li>
            <li><Link to="/category/tvs">TVs</Link></li >
            <li><Link to="/category/laptops">Laptops</Link></li >
            <li><Link to="/category/headphones">Headphones</Link></li>
            <li><Link to= "/category/smartphones">Smartphones</Link></li>
            <li><Link to= "/category/tablets">Tablets</Link></li>

            </ul >  
            </nav >
    );
};

export default NavBar;