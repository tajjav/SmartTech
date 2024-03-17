// import React, { useState, useEffect } from 'react';
// import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Link from '@mui/material/Link';
// import Typography from '@mui/material/Typography';
// import { Link as RouterLink } from 'react-router-dom';
// import Grid from '@mui/material/Grid';
// import mockdata from '../data/mockData'; 
// import ClearanceProductCard from '../components/ClearanceProductCard';

// const generateClearanceData = (allProducts) => {
//   return allProducts
//     .filter(product => product.clearance) 
//     .map(product => {
//       const originalPrice = parseFloat(product.price.replace('$', ''));
//       const discountRate = 0.75; // Apply a 25% discount
//       const discountedPrice = (originalPrice * discountRate).toFixed(2);
//       return { ...product, price: `$${discountedPrice}`, originalPrice: product.price };
//     });
// };

// const ClearancePage = () => {
//   const [clearanceProducts, setClearanceProducts] = useState([]);

//   useEffect(() => {
//     const allProducts = Object.values(mockdata).flat(); 
//     setClearanceProducts(generateClearanceData(allProducts));
//   }, []);

//   return (
//     <div>
//       <Breadcrumbs aria-label="breadcrumb">
//         <Link component={RouterLink} color="inherit" to="/">
//           Home
//         </Link>
//         <Typography color="text.primary">Clearance</Typography>
//       </Breadcrumbs>

//       <Grid container spacing={4} justifyContent="center" style={{ margin: '0 auto', maxWidth: '1280px' }}>
//         {clearanceProducts.map((product) => (
//           <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
//             <ClearanceProductCard
//               name={product.name}
//               description={product.description}
//               price={product.price} // Discounted price
//               imageUrl={product.imageUrl}
//               originalPrice={product.originalPrice} // Original price, before discount
//             />
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// };

// export default ClearancePage;