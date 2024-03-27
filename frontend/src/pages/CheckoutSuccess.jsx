import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Container, Paper, Grid, Button } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const CheckoutSuccess = () => {
  const products = [
    {
      id: 'tv1',
      name: 'Samsung 55" 4K Smart TV',
      description: 'Crystal-clear colors and stunning detail.',
      price: 999.99,
      imageUrl: '/images/TV/Samsung-55-4K-Smart-Tv.jpg',
    },
    {
      id: 'tv2',
      name: 'Lenovo ThinkPad X1 Carbon',
      description: 'Durable and lightweight business laptop.',
      price: 1499.99,
      imageUrl: '/public/images/Laptop/Lenovo-X1-Carbon.jpg',
    },
  ];

  const totalPrice = products.reduce((acc, product) => acc + product.price, 0);

  return (
    <Container sx={{ bgcolor: '#ffffff', padding: 4, height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color:'#5e35b1' }}>
          THANK YOU FOR YOUR ORDER!
        </Typography>
        <CheckCircleOutlineIcon sx={{ fontSize: 60, color: 'green' }} />
      </Box>
      
      <Grid container spacing={2} justifyContent="center">
        {products.map(product => (
          <Grid item key={product.id} xs={12} md={6}>
            <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 2 }}>
              <CardMedia
                component="img"
                sx={{ width: 140, height: 140, marginRight: 2 }}
                image={product.imageUrl}
                alt={product.name}
              />
              <Box>
                <Typography variant="h5" sx={{ marginBottom: 1 }}>{product.name}</Typography>
                <Typography variant="body1" sx={{ marginBottom: 1 }}>{product.description}</Typography>
                <Typography variant="h6" color="primary">Price: ${product.price.toFixed(2)}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Paper elevation={3} sx={{ maxWidth: 600, padding: 2, marginTop: 4, alignSelf: 'center' }}>
        <Grid container>
          <Grid item xs={6}>
            <Typography>Total Price: </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{ textAlign: 'right' }} variant="h6">${totalPrice.toFixed(2)}</Typography>
          </Grid>
        </Grid>
      </Paper>

      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Button variant="contained" color="primary" href="/">
          Continue Shopping
        </Button>
      </Box>
    </Container>
  );
};

export default CheckoutSuccess;
