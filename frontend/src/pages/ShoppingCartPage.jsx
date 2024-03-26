import React, { useContext, useEffect } from 'react';
import { Grid, Typography, Button, Card, CardContent, IconButton, Breadcrumbs, Link as MuiLink, CardMedia } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link as RouterLink } from 'react-router-dom';
import { useStore } from '../contexts/StoreContext';
import { useProductContext } from '../contexts/ProductContext';
import PayButton from '../components/PayButton';



const ShoppingCartPage = () => {
  const {products} = useProductContext();
  const { cart, updateQuantity, removeFromCart } = useStore();
  
  const handleQuantityChange = (item, increment) => {
    const newQuantity = item.quantity + increment;
    if (newQuantity > 0) {
      updateQuantity(item.product_id, newQuantity);
    } else {
      removeFromCart(item.product_id);
    }
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const formatPrice = (price) => {
    const priceInDollars = price / 100;
    return `$${priceInDollars.toFixed(2)}`;
  };

  const calculateTotal = () => {
    const total =  cart.reduce((total, item) => {
      if (!products[item.product_id]) return total

      const product = products[item.product_id]
      const itemPrice = product.price_cents; // Convert cents to dollars
      return total + item.quantity * itemPrice;
    }, 0).toFixed(2);
    console.log(total)
    
    // 

    return total
  };


  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mt: 2, mb: 0, ml: 45, mr: 2}}>
        <MuiLink component={RouterLink} color="inherit" to="/">
          Home
        </MuiLink>
        <Typography color="text.primary">Cart</Typography>
      </Breadcrumbs>
      <Grid container spacing={2} justifyContent="center" sx={{ padding: '20px' }}>
        {cart.length > 0 ? cart.map((item) =>
          products[item.product_id] &&
          <Card key={item.id} sx={{ display: 'flex', flexDirection: 'row', marginBottom: 2 }}>


            <CardMedia
              component="img"
              sx={{ width: '20%', objectFit: 'cover' }}
              image={import.meta.env.VITE_API_BASE_URL + products[item.product_id].image_1}
              alt={products[item.product_id].name}
            />
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
              <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>{products[item.product_id].name}</Typography>

              <Typography variant="subtitle1">{formatPrice(products[item.product_id].price_cents)}</Typography>
              <IconButton onClick={() => handleQuantityChange(item, -1)}><RemoveIcon /></IconButton>
              <Typography>{item.quantity}</Typography>
              <IconButton onClick={() => handleQuantityChange(item, 1)}><AddIcon /></IconButton>
              <IconButton onClick={() => handleRemoveFromCart(item.id)}><DeleteIcon /></IconButton>
            </CardContent>
          </Card>
        ) : <Typography>Your cart is empty</Typography>}

        <Grid item xs={12} md={4}>
          <Card sx={{ position: 'sticky', top: '20px' }}>
            <CardContent>
              <Typography variant="h6">Order Summary</Typography>
              <Typography variant="subtitle1">Subtotal: {formatPrice(calculateTotal())}</Typography>
              <PayButton
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
                cartItems={cart.cartItems}
                component={RouterLink}
                />
                 {/* to="/checkout" */}


            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default ShoppingCartPage;
