import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, TextField, FormControlLabel, Checkbox, Typography, Container } from '@mui/material';
import { useAuth } from '../contexts/AuthorizationContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    setError(''); 

    try {
      await login(email, password);
      navigate('/');
    } catch (error) {
     
      console.error(error);
      setError('Login failed. Please check your credentials.'); 
    }
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
          Login
        </Typography>
        {error && <Typography color="error">{error}</Typography>} 
        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
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
          
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <RouterLink to="/signup">
            {"Don't have an account? Sign Up"}
          </RouterLink>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;