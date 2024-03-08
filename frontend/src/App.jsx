import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import NavBar from './components/NavBar';
//import Footer from './components/Footer';
import HomePage from './pages/HomePage';
//import CategoryPage from './pages/CategoryPage';


function App() {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        
      </Routes>
      
    </Router>
  );
}

export default App;