
import React from "react";
import styled from 'styled-components';
import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Grid, Container, Button } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const CheckoutSuccess = () => {
  const tv = {
    id: 'tv1',
    name: 'Smart OLED TV',
    description: 'Experience true color with OLED technology',
    price: '$999',
    imageUrl: '/images/TV/TV.png',
    clearance: false,
  };

  const theme = {
    colors: {
      background: '#f5f5f5',
      card: '#ffffff',
      primary: '#5e35b1',
      secondary: '#f06292',
      text: '#37474f',
      confirm: 'linear-gradient(to right, #536dfe, #7c4dff)',
    },
  };

  return (
    <Container>
      <h1>Checkout Successful</h1>
      <p>Your order might take some time to process.</p>
      <p>Check your order status at your profile after about 10mins.</p>
      <p>
        Incase of any inqueries contact the support at{" "}
        <strong>support@smarttech.ca</strong>
      </p>
    </Container>
  )
    <Container sx={{ bgcolor: theme.colors.background, padding: 4, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            backgroundImage: theme.colors.confirm,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            MozBackgroundClip: 'text',
            MozTextFillColor: 'transparent',
            fontWeight: 'bold',
          }}
        >
          THANK YOU FOR YOUR ORDER!
        </Typography>
        <CheckCircleOutlineIcon sx={{ fontSize: 60, color: theme.colors.primary }} />
      </Box>
      
      <Card sx={{ maxWidth: 600, margin: '0 auto', bgcolor: theme.colors.card }}>
        <CardMedia
          component="img"
          height="300"
          image={tv.imageUrl}
          alt={tv.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {tv.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {tv.description}
          </Typography>
          <Typography variant="h6" color="primary" sx={{ marginTop: 2 }}>
            Price: {tv.price}
          </Typography>
        </CardContent>
      </Card>

      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Button variant="contained" color="primary" href="/">
          Continue Shopping
        </Button>
      </Box>
    </Container>
  );
};

export default CheckoutSuccess;


const Container = styled.div`
  min-height: 80vh;
  max-width: 800px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin-bottom: 0.5rem;
    color: #029e02;
  }
`;

