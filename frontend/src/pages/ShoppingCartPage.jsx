import React, { useContext } from 'react';
import { Grid, Typography, Button, Card, CardContent, IconButton, Breadcrumbs, Link as MuiLink, CardMedia } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link as RouterLink } from 'react-router-dom';
import { useStore } from '../contexts/StoreContext';



const ShoppingCartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useStore();

  const handleQuantityChange = (item, increment) => {
    const newQuantity = item.quantity + increment;
    if (newQuantity > 0) {
      updateQuantity(item.product_Id, newQuantity);
    } else {
      removeFromCart(item.product_Id);
    }
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const formatPrice = (price) => {
    // Assuming price is in cents and needs to be converted to dollars
    const priceInDollars = price / 100;
    return `$${priceInDollars.toFixed(2)}`;
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      // Assume the price is stored in cents in the backend
      const itemPrice = item.price_cents/ 100; // Convert cents to dollars
      return total + item.quantity * itemPrice;
    }, 0).toFixed(2);
  };
  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <MuiLink component={RouterLink} color="inherit" to="/">
          Home
        </MuiLink>
        <Typography color="text.primary">Cart</Typography>
      </Breadcrumbs>
      <Grid container spacing={2} justifyContent="center" sx={{ padding: '20px' }}>
        {cart.length > 0 ? cart.map((item) => (
          <Card key={item.id} sx={{ display: 'flex', flexDirection: 'row', marginBottom: 2 }}>
            <CardMedia
              component="img"
              sx={{ width: '20%', objectFit: 'cover' }} 
              image={item.image_1}
              alt={item.name}
            />
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
              <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>{item.name}</Typography>
              <Typography variant="body2">{item.description}</Typography>
              <Typography variant="subtitle1">{formatPrice(item.price_cents)}</Typography>
              <IconButton onClick={() => handleQuantityChange(item, -1)}><RemoveIcon /></IconButton>
              <Typography>{item.quantity}</Typography>
              <IconButton onClick={() => handleQuantityChange(item, 1)}><AddIcon /></IconButton>
              <IconButton onClick={() => handleRemoveFromCart(item.id)}><DeleteIcon /></IconButton>
            </CardContent>
          </Card>
        )) : <Typography>Your cart is empty</Typography>}
        
        <Grid item xs={12} md={4}>
          <Card sx={{ position: 'sticky', top: '20px' }}>
            <CardContent>
              <Typography variant="h6">Order Summary</Typography>
              <Typography variant="subtitle1">Subtotal: {formatPrice(calculateTotal())}</Typography>
              <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} component={RouterLink} to="/checkout">
                Checkout
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default ShoppingCartPage;
