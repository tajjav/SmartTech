const express = require('express');
const Stripe = require('stripe');
require('dotenv').config();
const stripe = Stripe(process.env.STRIPE_KEY);
const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {

  // const line_items = req.body.cartItems.map((item) => {
  //   console.log('cartItems 4rm bcknd route stripe: ', req.body.cartItems);
  //   return {
  //     price_data: {
  //       currency: 'usd',
  //       product_data: {
  //         name: item.name,
  //         images: [item.image_1],
  //         description: item.description,
  //         metadata: {
  //           id: item.id
  //         }
  //       },
  //       unit_amount: item.price_cents * 100,
  //     }, 
  //     quantity: item.quantity,
  //   };
  // });
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price_data: {
          currency: 'cad',
          product_data: {
            name: 'Samsung 55" 4K Smart TV',
            images: [`${process.env.SERVER_DOMAIN}/images/TV/Samsung-55-4K-Smart-Tv.jpg`],
            description: "Crystal-clear colors and stunning detail",
          },
          unit_amount: 99999,
        }, 
        quantity: 1,
      },
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price_data: {
          currency: 'cad',
          product_data: {
            name: 'Lenovo ThinkPad X1 Carbon',
            description: "Durable and lightweight business laptop",
            images: ['images/TV/Samsung-55-4K-Smart-Tv.jpg']
          },
          unit_amount: 149999,
        }, 
        quantity: 1,
      },
    ],
    // line_items,
    mode: 'payment',
    success_url: `${process.env.YOUR_DOMAIN}/checkout-success`,
    cancel_url: `${process.env.YOUR_DOMAIN}/cart`,
  }
  
  );
  // console.log('session ', session);
  
  // res.redirect(303, session.url);
  res.send({url: session.url});
}

);

module.exports = router