import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import ProductCard from '../components/ProductCard';


function SearchResultsPage() {
  const [searchResults, setSearchResults] = useState([]);
  const { query } = useParams(); 

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}api/products/search?query=${query}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchSearchResults();
  }, [query]); 

  return (
    <Grid container spacing={2} sx={{ mt: 4 }}>
      {searchResults.map((product) => (
        <Grid item key={product.productId} xs={16} sm={2} md={3}>
          <ProductCard {...product} />
        </Grid>
      ))}
    </Grid>
  );
}

export default SearchResultsPage;
