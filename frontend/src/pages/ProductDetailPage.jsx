import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Grid, Typography, Button, Paper, Box, IconButton, Divider } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LinearProgress from '@mui/material/LinearProgress';
import { useStore } from '../contexts/StoreContext';


const fetchProductDetails = async (productId) => {
  try {
    //  TODO use env for this localhost
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}api/products/${productId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const productDetails = await response.json();
    return productDetails;
  } catch (error) {
    console.error("Fetching product details failed:", error);
    return null;
  }
};

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const { addToCart } = useStore(); 
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    const getProductDetails = async () => {
      const productDetails = await fetchProductDetails(productId);
      setProduct(productDetails);
    };
    getProductDetails();
  }, [productId]);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.image_1); // This should be in a separate useEffect that depends on `product`
    }
  }, [product]);


  const handleBack = () => {
    navigate(-1); 
  };



  const increaseQuantity = () => setQuantity(qty => qty + 1);
  const decreaseQuantity = () => setQuantity(qty => Math.max(qty - 1, 1));
  
    const handleAddToCart = () => {
      if (product) {
        addToCart({ 
          product_id: product.id,
          name: product.name,
          price: parseFloat(product.price_cents) / 100, // Convert price from cents to dollars if needed
          imageUrl: product.image_1,
          quantity
        });
        
      }
    };
    const handleThumbnailClick = (image) => {
      setSelectedImage(image);
    };

  if (!product) {
    return    <Box sx={{ width: '100%' }}>
    <LinearProgress color="success" />
</Box>

  };



  return (
    <Grid container spacing={4} justifyContent="center" style={{ margin: '0 auto', maxWidth: '1280px', padding: '20px' }}>
      <Grid item xs={12}>
        <Button startIcon={<ArrowBackIcon />} onClick={handleBack}>
          Back to Products
        </Button>
      </Grid>
      <Grid item md={6} sm={12}>
       
      <img src={import.meta.env.VITE_API_BASE_URL + selectedImage} alt={product.name} style={{ width: '100%' }} />
      
        <div style={{ display: 'flex', justifyContent: 'center' }}>
    {[product.image_1, product.image_2, product.image_3].map((image, index) => (
      <img
        key={index}
        src={import.meta.env.VITE_API_BASE_URL + image}
        alt={`${product.name} ${index + 1}`}
        style={{ width: '24%', margin: '1%', cursor: 'pointer' }}
        onClick={() => handleThumbnailClick(image)}
      />
    ))}
  </div>
      </Grid>
      <Grid item md={6} sm={12}>
        <Typography variant="h4">{product.name}</Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h5">Price: ${product.price_cents / 100}</Typography> 
        <Typography sx={{ mt: 2 }} >Product Hightlights: <Divider sx={{ my: 0 }} /> {product.description}</Typography>
        
        <div>
          <Button onClick={decreaseQuantity}>-</Button>
          <Typography component="span" sx={{ margin: '0 20px' }}>{quantity}</Typography>
          <Button onClick={increaseQuantity}>+</Button>
        </div>
        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            startIcon={<ShoppingCartIcon />}
            sx={{
            padding: '10px 50px',
            bgcolor: '#5e17eb', 
            color: 'white', 
                '&:hover': {
            bgcolor: '#4e15cb', 
    },
    '.MuiButton-containedPrimary': {
      backgroundColor: 'transparent', 
    }
  }}
  onClick={handleAddToCart}
>
  Add to Cart
</Button>

        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductDetailPage;
