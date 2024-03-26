import React from "react";
import axios from 'axios';
import {Button, Link as MuiLink } from '@mui/material';

const url = import.meta.env.VITE_API_BASE_URL;


const PayButton = (cartItems) => {

  const handleCheckout = () => {
    console.log('cartItems 4rm PayButton: ', cartItems);

    axios.post(`${url}api/stripe/create-checkout-session`, {
      cartItems
    }).then((res) => {
      if (res.data.url) {
        window.location.href = res.data.url
      }
    }).catch((err) => console.log(err.message));
  }


  return (
    <div>
      <Button 
        onClick={() => handleCheckout()} 
        variant="contained"
        fullWidth
        sx={{
          mt: 2,
          bgcolor: '#5e17eb', // Your purplish/bluish color
          color: 'white', // Text color
          '&:hover': {
            bgcolor: '#4e15cb', // Darker purplish/bluish color for hover state
          }
        }}
      >Checkout</Button>
    </div>
  )
};

export default PayButton;
