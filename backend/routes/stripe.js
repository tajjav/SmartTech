const express = require('express');
const Stripe = require('stripe');
require('dotenv').config();
const stripe = Stripe(process.env.STRIPE_KEY);
const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 2000,
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/checkout-success`,
    cancel_url: `${YOUR_DOMAIN}/cart`,
  });

  // res.redirect(303, session.url);
  res.send({url: session.url});
});

module.exports = router