import React, { useContext, useState, useEffect } from 'react';
import { Grid, Typography, Button, Card, CardContent, CardMedia, IconButton, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { StoreContext } from '../context/StoreContext';

const ShoppingCartPage = () => {
  const { cart, updateQuantity, calculateTotal } = useContext(StoreContext);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Assuming cart is being populated from the StoreContext
    setCartItems(cart);
  }, [cart]);

  const handleQuantityChange = (item, increment) => {
    const newQuantity = Math.max(item.quantity + increment, 0);
    if (newQuantity > 0) {
      updateQuantity(item.id, newQuantity);
    } else {
      // Optionally remove the item from the cart if quantity reaches 0
    }
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ padding: '20px' }}>
      {cartItems.map((item) => (
        <Grid item container xs={12} spacing={2} key={item.id} sx={{ marginBottom: 2 }}>
          <Grid item xs={12} sm={4} lg={3}>
            <CardMedia
              component="img"
              image={item.imageUrl}
              alt={item.name}
              sx={{ height: 140, objectFit: 'contain', maxWidth: '100%' }}
            />
          </Grid>
          <Grid item xs={12} sm={5} lg={6}>
            <Typography variant="h6">{item.name}</Typography>
            <Typography color="text.secondary">{item.description}</Typography>
          </Grid>
          <Grid item xs={12} sm={3} lg={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <IconButton onClick={() => handleQuantityChange(item, -1)} size="large">
              <RemoveIcon />
            </IconButton>
            <Typography>{item.quantity}</Typography>
            <IconButton onClick={() => handleQuantityChange(item, 1)} size="large">
              <AddIcon />
            </IconButton>
            <Typography variant="h6" sx={{ marginTop: 1 }}>{item.price}</Typography>
          </Grid>
        </Grid>
      ))}
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper sx={{ padding: 2, marginTop: 2 }}>
          <Typography variant="h5" sx={{ marginBottom: 2 }}>Order Summary</Typography>
          <Typography variant="h6">Subtotal: ${calculateTotal()}</Typography>
          <Button variant="contained" color="primary" sx={{ width: '100%', marginTop: 2 }}>
            Checkout
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ShoppingCartPage;
