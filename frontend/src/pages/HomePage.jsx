import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Grid } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import { useProductContext } from '../contexts/ProductContext';



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
        margin: '10px',
        backgroundColor: 'transparent', 
      }}
      elevation={0}
    >
      <img
        src={props.imageUrl}
        style={{
          maxWidth: '180%',
          maxHeight: '145%', 
          objectFit: 'contain', 
        }}
        alt="carousel"
      />
    </Paper>
  );
}
const FeaturedDealsBanner = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginY: 4, // Adds vertical spacing
      }}
    >
      <Box sx={{ flexGrow: 1, height: 2, backgroundColor: '#E0E0E0' }} />
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontWeight: 'bold',
          fontSize: '24px', // Adjust the size as needed
          color: '#5e17eb',
          fontFamily: 'Helvetica',
          mx: 2, // Horizontal margin for spacing around the text
        }}
      >
        Shop Featured Deals
      </Typography>
      <Box sx={{ flexGrow: 1, height: 2, backgroundColor: '#E0E0E0' }} />
    </Box>
  );
};




const HomePage = () => {
  const {products} = useProductContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const selectRandomProducts = (count) => {
   
    const productsArray = Object.values(products);

    const shuffled = productsArray.sort(() => 0.5 - Math.random());
    
   
    return shuffled.slice(0, count);
  };
  

  if (loading) return <LinearProgress color="secondary" />;
  if (error) return <div>Error: {error}</div>;
 
 
 
 
 
 
 
  return (
    <div className="home-page">
      <Carousel>
        {carouselItems.map((item, i) => (
          <CarouselItem key={i} {...item} />
        ))}
      </Carousel>
      <FeaturedDealsBanner />
      <Grid container spacing={2} justifyContent="center">
        {selectRandomProducts(8).map(product => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard
              product={product}
              productId={product.id}
              name={product.name}
              //description={product.description}
              price_cents={product.price_cents}
              image_1={product.image_1} 
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default HomePage;
