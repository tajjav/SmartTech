import React, { useContext } from 'react';
import { Grid, Typography, Button, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { StoreContext } from '../context/StoreContext'; // Adjust if necessary

const ShoppingCartPage = () => {
  const { state: { cart }, updateQuantity, calculateTotal } = useContext(StoreContext);

  const handleQuantityChange = (item, increment) => {
    const newQuantity = item.quantity + increment;
    // Ensure the quantity does not go below 1
    if (newQuantity >= 1) {
      updateQuantity(item.productId, newQuantity);
    }
  };

  const formatPrice = (price) => {
    // Assuming price is a number. Adjust if your setup is different
    return `$${price.toFixed(2)}`;
  };

  return (

    <div>
    <Breadcrumbs aria-label="breadcrumb">
      <Link component={RouterLink} color="inherit" to="/">
        Home
      </Link>
      <Typography color="text.primary"> Cart</Typography>
    </Breadcrumbs>

    
 
    
    <Grid container spacing={2} justifyContent="center" sx={{ padding: '20px' }}>
      <Grid item xs={12} md={8}>
        {cart.map((item) => (
          <Card key={item.productId} sx={{ display: 'flex', flexDirection: 'column', marginBottom: 2 }}>
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <CardMedia
                component="img"
                image={item.imageUrl}
                alt={item.name}
                sx={{ width: '100px', height: '100px', objectFit: 'contain' }}
              />
              <Typography variant="subtitle1" sx={{ flex: '1 1 auto', marginLeft: '16px' }}>
                {item.name}
              </Typography>
              <Typography variant="subtitle1">
                {item.description}
              </Typography>
              <IconButton onClick={() => handleQuantityChange(item, -1)}>
                <RemoveIcon />
              </IconButton>
              <Typography variant="subtitle1">{item.quantity}</Typography>
              <IconButton onClick={() => handleQuantityChange(item, 1)}>
                <AddIcon />
              </IconButton>
              <Typography variant="subtitle1">{formatPrice(item.price)}</Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <Card sx={{ position: 'sticky', top: '20px' }}>
          <CardContent>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Order Summary
            </Typography>
            <Typography variant="subtitle1">
              Subtotal: {formatPrice(calculateTotal())}
            </Typography>
            <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Checkout
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    </div>
  );
};

export default ShoppingCartPage;
