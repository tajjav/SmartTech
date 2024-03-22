import React from 'react';
import { Box, Button, TextField, Typography, Container, Grid, Paper } from '@mui/material';

const GuestPage = () => {
  // Submit function for forms
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
  };

  return (
    <Container component="main">
      <Grid container spacing={4} sx={{ marginTop: 4 }}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h5" gutterBottom>
              Returning Customer
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Login and Checkout
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h5" gutterBottom>
              Guest Checkout
            </Typography>
           <Typography sx={{ mt: 1, fontSize: '0.875rem' }}> {/* fontSize size*/}
              Continue to guest checkout. You can register and create an account after checkout.
            </Typography>

            <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleSubmit}>
              Checkout as a Guest
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default GuestPage;
