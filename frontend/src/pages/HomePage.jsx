import React from 'react';
import ProductCard from '../components/ProductCard';
import { Grid } from '@mui/material';





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
      <Grid container spacing={2}>
        {mockProducts.map(product => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HomePage;