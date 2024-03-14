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

// Get a single product by ID
router.get('/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await productsQueries.showById(productId);
        res.json(product);
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
router.get('/', async (req, res) => {
    try {
        const { brand } = req.query;
        console.log('brand = ', brand);
        const products = await productsQueries.getProductsByBrand(brand);
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



module.exports = router;
