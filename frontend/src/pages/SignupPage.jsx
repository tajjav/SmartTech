import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, TextField, FormControlLabel, Checkbox, Typography, Container } from '@mui/material';

const SignupPage = () => {

  const handleSignup = (event) => {
    event.preventDefault();
 
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSignup} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
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
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          {/* Link to login page if the user already has an account */}
        </Box>
      </Box>
    </Container>
  );
};



export default SignupPage;