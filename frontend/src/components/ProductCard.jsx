import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/joy/Typography';
import { Link as RouterLink } from 'react-router-dom';
import { useStore } from '../contexts/StoreContext';

const ProductCard = ({product, productId, name, description, price_cents, image_1, stock, clearance = false, clearancePrice = '' }) => {
  const { addToCart } = useStore();
  
  // Handle add to cart function
  const handleAddToCart = (event) => {
    event.preventDefault(); // Prevent the link from navigating
    if (product) {
      addToCart({ 
        product_Id: product.id,
        name: product.name,
        price: parseFloat(product.price_cents) / 100,
        imageUrl: product.image_1,
        quantity:1
      });
    }
  };

  if (!product) {
    return <Box sx={{ width: '100%' }}><LinearProgress color="success" /></Box>;
  };


  const cardHoverStyle = {
    transition: 'transform 0.3s ease-in-out',
    ':hover': {
      transform: 'scale(1.03)', // Slightly enlarge the card on hover
    },
    ':hover .addToCartButton': {
      // This will target a child button with the 'addToCartButton' class
      transform: 'translateY(-5px)', // Optional: make the add to cart button pop a little
    }
  };
  return (
    <RouterLink to={`/product/${productId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card sx={{ ...cardHoverStyle, width: 220, maxWidth: '150%', boxShadow: 'lg', ml: '20px', cursor: 'pointer' }}>
        <CardOverflow>
          <AspectRatio sx={{ minWidth: 200 }}>
            <img src={import.meta.env.VITE_API_BASE_URL + image_1} loading="lazy" alt={name} />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <Typography level="body-xs">{description}</Typography>
          <Typography level="h6" component="div" fontWeight="md" color="neutral" textColor="text.primary">
            {name}
          </Typography>
          {/* Price and stock information */}
        </CardContent>
        <CardOverflow>
          <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Button 
          variant="solid" 
          color="primary" 
          size="lg" 
          className="addToCartButton" // Add this class to target the button for hover effect
          onClick={handleAddToCart}
          sx={{
            transition: 'transform 0.3s ease-in-out', // Add transition effect to the button
          }}
        >
          Add to cart
        </Button>
          </Box>
        </CardOverflow>
      </Card>
    </RouterLink>
  );
};

export default ProductCard;
