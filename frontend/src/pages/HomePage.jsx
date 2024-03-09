
import React from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/HomePage.scss';


const mockProducts = [
  { id: 1, name: 'Smart TV', description: 'A high-quality smart TV', price: '$999', imageUrl: '/images/TV.png' },
  { id: 2, name: 'Laptop', description: 'A powerful laptop for professionals', price: '$1499', imageUrl: '/images/Laptop.jpg' },
  { id: 3, name: 'Headphones', description: 'Noise-cancelling headphones', price: '$299', imageUrl: '/images/Headphones.png' },
  { id: 4, name: 'SmartPhones', description: 'Experience next-gen photography with our best smartphone camera.', price: '$199', imageUrl: '/images/Smartphone1.jpg' },
  { id: 5, name: 'Tablets', description: 'A powerful tablet with a stunning display', price: '$299', imageUrl: '/images/Tablet1.png' },
  
];

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="product-grid">
        {mockProducts.map(product => (
        <ProductCard
          key={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
       </div>
    </div>
  );
};

export default HomePage;