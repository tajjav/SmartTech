const express = require('express');
const router = express.Router();
const productsQueries = require('../db/queries/products');

// Create a product
router.post('/products', async (req, res) => {
    try {
        const newProduct = req.body;
        const product = await productsQueries.create(newProduct);
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all products
router.get('/products', async (req, res) => {
    try {
        const products = await productsQueries.showAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a single product by ID
router.get('/products/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await productsQueries.showById(productId);
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get products by category ID
router.get('/category/:id/products', async (req, res) => {
    try {
        const categoryId = req.params.id;
        const products = await productsQueries.showByCategoryId(categoryId);
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a product
router.put('/products/:id', async (req, res) => {
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
router.delete('/products/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        await productsQueries.remove(productId);
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Fetch all products by category ID
router.get('/:id', async (req, res) => {
    try {
        const categoryId = req.params.id;
        const products = await productsQueries.getProductsByCategory(categoryId);
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Fetch products by category ID with optional brand filter
router.get('/:id/products', async (req, res) => {
    try {
        const categoryId = req.params.id;
        const brand = req.query.brand;
        const products = await productsQueries.getProductsByCategoryAndBrand(categoryId, brand);
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
