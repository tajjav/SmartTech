import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { useProductContext } from '../contexts/ProductContext';
import { transformCategoryId } from '../helper/categoryHelper';

const CategoryPage = () => {
    const { categoryId } = useParams();
    const { products, loading, error, fetchProducts } = useProductContext(); //context to manage state
console.log('produces', products)
    useEffect(() => {
        const backendCategoryId = transformCategoryId(categoryId);
        fetchProducts(backendCategoryId); // Use context function to fetch products
    }, [categoryId, fetchProducts]);

    if (loading) return <Typography>Loading...</Typography>;
    if (error) return <Typography>Error: {error}</Typography>;

    return (
      <div>
        <Breadcrumbs aria-label="breadcrumb">
          <Link component={RouterLink} color="inherit" to="/">
            Home
          </Link>
          <Link  color="inherit" to="/products">
            Products
          </Link>
          <Typography color="text.primary">{categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}</Typography>
        </Breadcrumbs>
  
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}> 
                Category: {categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}
            </h1>

            <Grid container spacing={4} justifyContent="center" style={{ margin: '0 auto', maxWidth: '1280px' }}> 
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} key={product.id} style={{ display: 'flex', justifyContent: 'center' }}> 
                        <ProductCard
                            product={product}
                            productId={product.id} 
                            name={product.name}
                            description={product.description}
                            price={product.price_cents}
                            image_1={product.image_1}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default CategoryPage;
     