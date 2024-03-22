import React, { useState } from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Button, Grid, Container } from '@mui/material';

const OrderPage = () => {
  // Initial mock data for cart items
  const initialCartItems = [
    {
      id: 1,
      name: 'Product Name',
      price: 599.99,
      description: 'poduct description.',
      imageUrl: 'https://via.placeholder.com/150',
      quantity: 1
    },
    // Add more items as needed
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleQuantityChange = (itemId, newQuantity) => {
    // Update the quantity for the specific item in the cart
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };
  
  // Define theme colors for prettiness
   const theme = {
   colors: {
      background: '#f5f5f5', // White-greyish for page background
      card: '#ffffff', // White for cards
      primary: '#5e35b1', // A deep shade of purple
      secondary: '#f06292', // A soft pink
      text: '#37474f', // Dark grey for text
      button: '#d81b60', // A vibrant pink for buttons
      confirm: 'linear-gradient(to right, #536dfe, #7c4dff)', 
    }
  };
  return (
    <Container sx={{ bgcolor: theme.colors.background, padding: 4 }}>
      <Box sx={{ marginTop: 4 }}>
       <Typography
  variant="h5"
  gutterBottom
  align="side"
  sx={{
    backgroundImage: 'linear-gradient(to right, #536dfe, #7c4dff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    MozBackgroundClip: 'text',
    MozTextFillColor: 'transparent',
    display: 'inline',
    fontWeight: 'bold',
  }}
>
  THANK YOU FOR YOUR ORDER!
</Typography>

           <Grid container spacing={2}>
          {cartItems.map((item) => (
            <Grid item xs={12} md={8} key={item.id}>
              <Card sx={{ display: 'flex', marginBottom: 2, bgcolor: theme.colors.card }}>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image={item.imageUrl}
                  alt={item.name}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="h5" variant="h5" color={theme.colors.primary}>
                      {item.name}
                    </Typography>
                    <Typography variant="subtitle1" color={theme.colors.text} component="p">
                      {item.description}
                    </Typography>
                    <Typography variant="subtitle1" color={theme.colors.secondary} component="p">
                      Price: ${item.price.toFixed(2)}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                      <Button variant="contained" sx={{ backgroundColor: theme.colors.button }} onClick={() => handleQuantityChange(item.id, Math.max(item.quantity - 1, 1))}>-</Button>
                      <Typography component="span" sx={{ margin: '0 20px', color: theme.colors.text }}>{item.quantity}</Typography>
                      <Button variant="contained" sx={{ backgroundColor: theme.colors.button }} onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</Button>
                    </Box>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          ))}
          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: theme.colors.card }}>
              <CardContent>
                <Typography variant="h6" color={theme.colors.primary}>Order Summary</Typography>
                <Typography color={theme.colors.text}>Subtotal</Typography>
                <Typography color={theme.colors.secondary}>${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</Typography>
                <Button variant="contained" sx={{ width: '100%', marginTop: 2, backgroundColor: theme.colors.button }}>Checkout</Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default OrderPage;