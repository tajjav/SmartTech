import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Grid, Container } from '@mui/material';

const OrderPage = () => {
  
  const cartItems = [
    {
      id: 1,
      name: 'Product Name',
      price: 599.99,
      description: 'product description.',
      imageUrl: 'https://via.placeholder.com/150',
      quantity: 1
    },
   
  ];

  
  const theme = {
    colors: {
      background: '#f5f5f5', 
      card: '#ffffff', 
      primary: '#5e35b1', 
      secondary: '#f06292', 
      text: '#37474f', 
      
      confirm: 'linear-gradient(to right, #536dfe, #7c4dff)', 
    }
  };

  return (
    <Container sx={{ bgcolor: theme.colors.background, padding: 4 }}>
      <Box sx={{ marginTop: 4 }}>
        <Typography
          variant="h5"
          gutterBottom
          align="center" 
          sx={{
            backgroundImage: theme.colors.confirm,
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
                    <Typography component="div" variant="h5" color={theme.colors.primary}>
                      {item.name}
                    </Typography>
                    <Typography variant="subtitle1" color={theme.colors.text} component="div">
                      {item.description}
                    </Typography>
                    <Typography variant="subtitle1" color={theme.colors.secondary} component="div">
                      Price: ${item.price.toFixed(2)}
                    </Typography>
                    
                    <Typography component="div" sx={{ margin: '0 20px', color: theme.colors.text }}>
                      Quantity: {item.quantity}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default OrderPage;