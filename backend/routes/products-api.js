const express = require('express');
const router = express.Router();
const productsQueries = require('../db/queries/products');

// Create a product
router.post('/', async (req, res) => {
    try {
        const newProduct = req.body;
        const product = await productsQueries.create(newProduct);
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await productsQueries.showAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Update a product
router.put('/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const updatedProduct = req.body;
        updatedProduct.id = productId;
        const product = await productsQueries.update(updatedProduct);
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



// Delete a product
router.delete('/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        await productsQueries.remove(productId);
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Fetch products by brand filter
router.get('/brands/:brand', async (req, res) => {
    console.log('req: ', req);
    try {
        const { brand } = req.params;
        console.log('req: ', req);
        console.log('brand = ', brand);
        const products = await productsQueries.getProductsByBrand(brand);
        console.log('products:', products);
        res.json(products);
    } catch (error) {
        res.status(200).json({ error: error.message });
    }
});


router.get('/filter-by-price', async (req, res) => {
  console.log('filter route');
  try {
      const minPrice = req.query.minPrice; // Get the minimum price from query parameters
      const maxPrice = req.query.maxPrice; // Get the maximum price from query parameters
      console.log('minPrice: ', minPrice, 'maxPrice: ', maxPrice);

      // Call a function to retrieve products based on the price range
      const filteredProducts = await productsQueries.getProductsByPriceRange(minPrice, maxPrice);

      res.json(filteredProducts);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

router.get('/search', async (req, res) => {
  try {
      const productName = req.query.name; // Assuming the search query is passed as a query parameter named 'name'
      // Call a function to perform the search based on the product name
      const results = await productsQueries.searchProductsByName(productName);
      res.json(results);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

//Get a single product by ID
router.get('/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await productsQueries.showById(productId);
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
