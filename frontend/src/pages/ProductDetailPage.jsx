import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Grid, Typography, Button, Paper, Box, IconButton, Divider } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import mockData from '../data/mockData';
import { useStore } from '../context/StoreContext';

const fetchProductDetails = (productId) => {
  const allProducts = Object.values(mockData).flat();
  const productDetails = allProducts.find(product => product.id === productId);
  return productDetails;
};

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // State for managing quantity
  const navigate = useNavigate();

  useEffect(() => {
    const productDetails = fetchProductDetails(productId);
    setProduct(productDetails);
  }, [productId]);

// Back to product Button
  const category = productId.replace(/[0-9]/g, '');

  const handleBack = () => {

    navigate(`/category/${category}s`.toLowerCase());
  };
 //Quanity
  const increaseQuantity = () => setQuantity(qty => qty + 1);
  const decreaseQuantity = () => setQuantity(qty => Math.max(qty - 1, 1));

  if (!product) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Grid container spacing={4} justifyContent="center" style={{ margin: '0 auto', maxWidth: '1280px', padding: '20px' }}>
      <Grid item xs={12}>
      <Button startIcon={<ArrowBackIcon />} onClick={handleBack}>
          Back to {category.charAt(0).toUpperCase() + category.slice(1)} Products
        </Button>
      </Grid>
      <Grid item md={6} sm={12}>
        <Paper elevation={3}>
          <Box
            component="img"
            src={product.imageUrl}
            sx={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}
            alt="Main product view"
          />
        </Paper>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          {product.additionalImages?.map((image, index) => (
            <IconButton key={index}>
              <Box
                component="img"
                src={image}
                sx={{ width: '100px', maxHeight: '100px', objectFit: 'cover', margin: '0 5px' }}
                alt={`Additional view ${index + 1}`} 
              />
            </IconButton>
          ))}
        </Box>
      </Grid>
      <Grid item md={6} sm={12}>
        <Typography variant="h4">{product.name}</Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h5">Price: {product.price}</Typography>
        <Typography sx={{ mt: 2 }}>{product.description}</Typography>
        <div>
          <Button onClick={decreaseQuantity}>-</Button>
          <Typography component="span" sx={{ margin: '0 20px' }}>{quantity}</Typography>
          <Button onClick={increaseQuantity}>+</Button>
        </div>
        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ShoppingCartIcon />}
            sx={{ padding: '10px 50px' }}
          >
            Add to Cart
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductDetailPage;
