import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import { Link as RouterLink } from 'react-router-dom';
import { useStore } from '../contexts/StoreContext';


const ProductCard = ({product, productId, name, description, price_cents , image_1, stock, clearance = false, clearancePrice = '', showOnMainPage = true }) => {
  const { addToCart } = useStore();
  // Integrate useStore to use addToCart function

 const apiURL = import.meta.env.VITE_API_BASE_URL 
  
  console.log('product', product)
  

  // Define a function that calls addToCart from context when button is clicked
const handleAddToCart = () => {
  const itemToAdd = {
    productId: product.id, // Ensure this is correct and consistent
    name: product.name,
    price: Number(product.price_cents) / 100, // Convert to dollars if needed and ensure it's a number
    quantity: quantity,
    imageUrl: product.image_1,
  };

  addToCart(itemToAdd);
};


  return (
    <Card sx={{ width: 220, maxWidth: '150%', boxShadow: 'lg', ml: '20px' }}>
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
        {clearance ? (
          <>
            <Typography level="body-sm" sx={{ textDecoration: 'line-through', display: 'block' }}>
              {price_cents }
            </Typography>
            <Typography level="title-lg" sx={{ mt: 1, fontWeight: 'xl', color: 'danger.main' }}>
              {clearancePrice} <Chip component="span" size="sm" variant="soft" color="danger">Clearance</Chip>
            </Typography>
          </>
        ) : (
          <Typography
            level="title-lg"
            sx={{ mt: 1, fontWeight: 'xl' }}
            endDecorator={
              stock < 10 ? (
                <Chip component="span" size="sm" variant="soft" color="danger">
                  Only {stock} left!
                </Chip>
              ) : (
                <Chip component="span" size="sm" variant="soft" color="success">
                  In stock
                </Chip>
              )
            }
          >
            {price_cents}
          </Typography>
        )}
        {!clearance && stock < 10 && (
          <Typography level="body-sm">
            Only {stock} left in stock!
          </Typography>
        )}
      </CardContent>
      <CardOverflow>
        {/* Update button onClick event to handleAddToCart */}
        <Button variant="solid" color="primary" size="lg" onClick={handleAddToCart}>
          Add to cart
        </Button>
      </CardOverflow>
    </Card>
  );
};

export default ProductCard;
