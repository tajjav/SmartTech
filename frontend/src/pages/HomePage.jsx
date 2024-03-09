import React from 'react';
import ProductCard from '../components/ProductCard';
import { Grid } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';


// Carousel items data, just the images
const carouselItems = [
  {
    imageUrl: '/images/TV.png',
  },
  {
      imageUrl:'/images/Laptop.jpg',
  },
  {
    imageUrl: '/images/Headphones.png',
  },
  {
    imageUrl: '/images/Smartphone1.jpg',
  },
  {
    imageUrl: '/images/Tablet1.png',
  },
];
  
function CarouselItem(props) {
  return (
    <Paper
      style={{
        backgroundImage: `url(${props.imageUrl})`,
        backgroundSize: 'contain', // This will make sure the entire image fits within the Paper
        backgroundRepeat: 'no-repeat', // This will prevent the image from repeating
        backgroundPosition: 'center', // This will center the image within the Paper
        height: '300px', // Adjust the height as needed
        width: '100%', // This will ensure the Paper component is full width
        margin: 'auto', // Centers the Paper component if it's not full width
      }}
      elevation={0}
    />
  );
}



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
      <Carousel>
        {carouselItems.map((item, i) => (
          <CarouselItem key={i} {...item} />
        ))}
      </Carousel>
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
