import React, { useState, useEffect } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import mockData from '../data/mockData';

const ClearancePage = () => {
  const [clearanceProducts, setClearanceProducts] = useState([]);

  useEffect(() => {
    const allProducts = Object.values(mockData).flat();
    const clearanceItems = allProducts.filter(product => product.clearance);
    const uniqueClearanceItems = clearanceItems.filter((product, index, self) =>
      index === self.findIndex((t) => t.id === product.id)
    );
    setClearanceProducts(uniqueClearanceItems);
  }, []);

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mt: 2, mb: 0, ml: 45, mr: 2}}>
        <Link component={RouterLink} color="inherit" to="/">
          Home
        </Link>
        <Typography color="text.primary">Clearance</Typography>
      </Breadcrumbs>

      <Grid container spacing={4} justifyContent="center" style={{ margin: '0 auto', maxWidth: '1280px' }}>
        {clearanceProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={product.imageUrl}
                alt={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="h6">
                  Sale: {product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                  {product.originalPrice}
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 2,
                    bgcolor: '#5e17eb',
                    color: 'white', 
                    '&:hover': {
                      bgcolor: '#4e15cb', 
                    },
                    
                  }}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ClearancePage;
