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
      elevation={0}
      sx={{
        height: 'auto', // Adjust height automatically based on content
        paddingY: 3, // Use padding on the y-axis for spacing
        display: 'flex',
        flexDirection: 'column', // Stack children vertically
        justifyContent: 'center',
        alignItems: 'center',
        marginY: 2, // Adjust vertical margins to control spacing from elements above and below
        backgroundImage: 'url(/path-to-your-banner-image.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        maxWidth: '80%', // Make banner less wide, adjust as needed
        marginLeft: 'auto', // Center the banner horizontally
        marginRight: 'auto',
        position: 'relative',
        transition: 'transform 0.3s ease', // Smooth transition for hover effect
        '&:hover': {
          transform: 'scale(1.05)', // Slightly enlarge the banner on hover
        },
      }}
    >
      <div style={{
        textAlign: 'center',
        color: 'white',
        zIndex: 2,
        transition: 'transform 0.3s ease', // Smooth transition for hover effect
      }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', fontSize: '2rem', transition: 'color 0.3s ease' }}>
          Shop Featured Deals
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          href="link-for-featured-deals"
          sx={{
            marginTop: 2,
            paddingX: 4, // Increase horizontal padding for a wider button
            paddingY: 1, // Adjust vertical padding if needed
            fontSize: '1rem', // Button font size
            transition: 'background-color 0.3s ease', // Smooth background color transition
            ':hover': {
              backgroundColor: 'secondary.main', // Change button color on hover
              opacity: 0.9,
            }
          }}
        >
          Explore Now
        </Button>
      </div>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          zIndex: 1,
          transition: 'background-color 0.3s ease', // Smooth background color transition
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Darken overlay on hover
          },
        }}
      />
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
        if (!response.ok) throw new Error('Network response was not ok');
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
  }, []); // Empty dependency array means this effect runs once on mount

  const selectRandomProducts = (products, count) => {
    // Shuffle array using the Fisher-Yates shuffle algorithm
    const shuffled = products.sort(() => 0.5 - Math.random());
    // Get sub-array of first n elements after shuffled
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
              image_1={product.image_1} // Adjust according to how your backend sends image URLs
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default HomePage;
