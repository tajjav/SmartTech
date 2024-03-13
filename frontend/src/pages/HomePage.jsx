import React from 'react';
import ProductCard from '../components/ProductCard';
import { Grid } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';



// Carousel items data, just the images
const carouselItems = [
 
  {
    imageUrl: 'images/Banner/Banner2.svg',
  },
  {
      imageUrl:'images/Banner/Banner3.svg',
  },
  {
    imageUrl: 'images/Banner/Banner1.svg',
  },
  {
    imageUrl: 'images/Banner/Banner4.png',
  },
 
];
  
function CarouselItem(props) {
  return (
    <Paper
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        height: '500px', 
        width: '100%',
        margin: 'auto',
        backgroundColor: 'white', 
      }}
      elevation={0}
    >
      <img
        src={props.imageUrl}
        style={{
          maxWidth: '100%',
          maxHeight: '100%', 
          //objectFit: 'contain', // Ensures the image's aspect ratio is maintained
        }}
        alt=""
      />
    </Paper>
  );
}
const FeaturedDealsBanner = () => {
  return (
    <Paper
      style={{
        
        height: '130px', 
        width: '100%',
        backgroundImage: 'url(path-to-your-banner-image.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        margin: '20px ',
        backgroundColor: '#38b6ff' 
      }}
    
    >
      
      <a href="link-for-featured-deals" style={{ 
        
        display: 'block',
        height: '100%',
        width: '100%',
        textAlign: 'center',
        lineHeight: '150px', 
        color: '#5e17eb', 
        fontWeight: 'bold',
        fontSize: '30px',
        fontFamily:'Helvetica',
        textDecoration: 'none',

      }}>
        Shop Featured Deals
      </a>
    </Paper>
  );
};

const mockProducts = [
  { id: 1, name: 'Smart TV', description: 'A high-quality smart TV', price: '$999', imageUrl: '/images/TV/TV.png' },
  { id: 2, name: 'Laptop', description: 'A powerful laptop for professionals', price: '$1499', imageUrl: '/images/Laptop/Laptop.jpg' },
  { id: 3, name: 'Headphones', description: 'Noise-cancelling headphones', price: '$299', imageUrl: '/images/Headphones/Headphones.png' },
  { id: 4, name: 'SmartPhones', description: 'Experience next-gen photography with our best smartphone camera.', price: '$199', imageUrl: '/images/Smartphones/Smartphone1.jpg' },
  { id: 5, name: 'Tablets', description: 'A powerful tablet with a stunning display', price: '$299', imageUrl: '/images/Tablet/Tablet1.png' },
  { id: 6, name: 'Tablets', description: 'A powerful tablet with a stunning display', price: '$299', imageUrl: '/images/Tablet/Tablet1.png' }, 
  { id: 7, name: 'Tablets', description: 'A powerful tablet with a stunning display', price: '$299', imageUrl: '/images/Tablet/Tablet1.png' },
  { id: 8, name: 'Tablets', description: 'A powerful tablet with a stunning display', price: '$299', imageUrl: '/images/Tablet/Tablet1.png' },
];

const HomePage = () => {
  return (
    <div className="home-page">
      <Carousel>
        {carouselItems.map((item, i) => (
          <CarouselItem key={i} {...item} />
        ))}
      </Carousel>
      <FeaturedDealsBanner />
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
