// CheckoutPage.jsx
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../components/CheckoutForm'; // Import your CheckoutForm component

// Assure to replace with your actual Stripe publishable key
const stripePromise = loadStripe('pk_test_yourPublishableKey');

const CheckoutPage = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default CheckoutPage;
