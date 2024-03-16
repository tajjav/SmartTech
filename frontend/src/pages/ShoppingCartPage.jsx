import React from 'react';
import { useStore } from '../context/StoreContext'; 
import { Box, Typography, Button, List, ListItem, ListItemText } from '@mui/material';


const ShoppingCartPage = () => {
  const { cartItems } = useStore();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        <List>
          {cartItems.map(item => (
            <ListItem key={item.id}>
              <ListItemText primary={item.name} secondary={`Quantity: ${item.quantity}`} />
              <Typography variant="body1">${item.price}</Typography>
            </ListItem>
          ))}
          <ListItem>
            <Typography variant="h6">Total: ${calculateTotal()}</Typography>
          </ListItem>
        </List>
      )}
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Checkout
      </Button>
    </Box>
  );
};

export default ShoppingCartPage;
