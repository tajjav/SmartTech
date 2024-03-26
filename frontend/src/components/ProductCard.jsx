import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Box from '@mui/material/Box';
import Typography from '@mui/joy/Typography';
import { Link as RouterLink } from 'react-router-dom';
import { useStore } from '../contexts/StoreContext';

const ProductCard = ({
  product, productId, name, description, price_cents, image_1, stock,
  clearance = false, clearancePrice = '', showOnMainPage = true
}) => {
  const { addToCart } = useStore();

  const handleAddToCart = (event) => {
    event.preventDefault(); 
    event.stopPropagation(); 
  
    addToCart({
      product_id,
      name,
      price_cents: clearance ? clearancePrice : price_cents,
      image_1,
      quantity: 1
    });
  };
  if (!showOnMainPage && !clearance) {
    return null;
  }

  const cardHoverStyle = {
    transition: 'transform 0.3s ease-in-out',
    ':hover': {
      transform: 'scale(1.03)',
    },
    ':hover .addToCartButton': {
      transform: 'translateY(-5px)',
    }
  };
  const priceInDollars = (price_cents / 100).toFixed(2);
  const clearancePriceInDollars = (clearancePrice / 100).toFixed(2);

  return (
    <RouterLink to={`/product/${productId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card sx={{ ...cardHoverStyle, width: 350, maxWidth: '250%', boxShadow: 'lg', ml: '20px', cursor: 'pointer', paddingLeft: '16px'  }}>
        <CardOverflow>
          <AspectRatio sx={{ minWidth: 200 }}>
            <img src={import.meta.env.VITE_API_BASE_URL + image_1} loading="lazy" alt={name} />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <Typography level="body-xs">{description}</Typography>
          <RouterLink to={`/product/${productId}`} style={{ textDecoration: 'none' }}>
            <Typography level="h6" component="div" fontWeight="md" color="neutral" textColor="text.primary">
              {name}
            </Typography>
          </RouterLink>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
            <Typography level="body2" fontWeight="bold" noWrap>
              ${priceInDollars}
            </Typography>
            {clearance && (
              <Chip label="Clearance" size="small" variant="soft" color="danger"/>
            )}
          </Box>
          {stock < 10 && (
            <Typography level="body2" color="danger" noWrap>
              Only {stock} left!
            </Typography>
          )}
         
        </CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft: '16px', gap: '8px', marginBottom: '16px' }}>
       
        <Button 
  variant="solid" 
  size="lg" 
  className="addToCartButton"
  onClick={handleAddToCart}
  sx={{
    transition: 'transform 0.3s ease-in-out',
    alignSelf: 'flex-start',
    bgcolor: '#5e17eb', 
    ':hover': {
      bgcolor: '#4e15cb', 
    },
    color: 'white', 
  }}
 
>
  Add to cart
</Button>

        </Box>
      </Card>
    </RouterLink>
  );
};

export default ProductCard;
