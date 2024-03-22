import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Grid } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';



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
  sx={{
    height: '130px',
    width: '100%',
    backgroundImage: 'url(path-to-your-banner-image.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    margin: '20px',
    backgroundColor: '#D3D3D3', 
    position: 'relative', 
  }}
>
  
  <Typography
    variant="h4"
    component="h2"
    sx={{
      fontWeight: 'bold',
      fontSize: '30px', 
      color: '#5e17eb', 
      fontFamily: 'Helvetica', 
      textAlign: 'center', 
      lineHeight: '150px', 
      textDecoration: 'none', 
      transition: 'color 0.3s ease', 
    }}
  >
    Shop Featured Deals
  </Typography>


 


</Paper>
  );
};


const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}api/products`);
        console.log(`Response status: ${response.status}`); 
        if (!response.ok) {
          const responseBody = await response.text(); 
          console.log(`Response body: ${responseBody}`); 
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        // Select 8 random products if the data length is more than 8
        const randomProducts = data.length > 8 ? selectRandomProducts(data, 8) : data;
        setProducts(randomProducts);
      } catch (error) {
        setError(error.message);
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); 

  const selectRandomProducts = (products, count) => {
   
    const shuffled = products.sort(() => 0.5 - Math.random());
    
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
        {products.map(product => (
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
