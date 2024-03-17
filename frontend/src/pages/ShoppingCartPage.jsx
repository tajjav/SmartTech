import React, { useContext, useState, useEffect } from 'react';
import { Grid, Typography, Button, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { StoreContext } from '../context/StoreContext';

const ShoppingCartPage = () => {
  const { cart, updateQuantity, calculateTotal } = useContext(StoreContext);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(cart);
  }, [cart]);

  const handleQuantityChange = (item, increment) => {
    const newQuantity = item.quantity + increment;
    updateQuantity(item.id, newQuantity);
  };

  const formatPrice = (price) => {
    return price.includes('$') ? price : `$${price}`;
  };

  return (
    <Grid container spacing={2} justifyContent="center" sx={{ padding: '20px' }}>
      <Grid item xs={12} md={8}>
        {cartItems.map((item) => (
          <Card key={item.id} sx={{ display: 'flex', flexDirection: 'column', marginBottom: 2 }}>
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <CardMedia
                component="img"
                image={item.imageUrl}
                alt={item.name}
                sx={{ width: '100px', height: '100px', objectFit: 'contain' }}
              />
              <Typography variant="subtitle1" sx={{ flex: '1 1 auto', marginLeft: '16px' }}>
                {item.name}
              </Typography>
              <Typography variant="subtitle1">
                {item.description}
              </Typography>
              <IconButton onClick={() => handleQuantityChange(item, -1)}>
                <RemoveIcon />
              </IconButton>
              <Typography variant="subtitle1">{item.quantity}</Typography>
              <IconButton onClick={() => handleQuantityChange(item, 1)}>
                <AddIcon />
              </IconButton>
              <Typography variant="subtitle1">{formatPrice(item.price)}</Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <Card sx={{ position: 'sticky', top: '20px' }}>
          <CardContent>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Order Summary
            </Typography>
            <Typography variant="subtitle1">
              Subtotal: {formatPrice(calculateTotal())}
            </Typography>
            <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Checkout
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ShoppingCartPage;
