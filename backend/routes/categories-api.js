const express = require('express');
const router = express.Router();
const categoriesQueries = require('../db/queries/categories');
const productsQueries = require('../db/queries/products'); // Import products queries

router.post('/categories', async (req, res) => {
    try {
        const newCategory = req.body;
        const category = await categoriesQueries.create(newCategory);
        res.json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/categories', async (req, res) => {
    try {
        const categories = await categoriesQueries.showAll();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/categories/:id', async (req, res) => {
    try {
        const categoryId = req.params.id;
        const category = await categoriesQueries.showById(categoryId);
        res.json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/categories/:id', async (req, res) => {
    try {
        const categoryId = req.params.id;
        const updatedCategory = req.body;
        updatedCategory.id = categoryId;
        const category = await categoriesQueries.update(updatedCategory);
        res.json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/categories/:id', async (req, res) => {
    try {
        const categoryId = req.params.id;
        await categoriesQueries.remove(categoryId);
        res.json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Fetch all products by category ID
router.get('/category/:id', async (req, res) => {
    try {
        const categoryId = req.params.id;
        const products = await productsQueries.getProductsByCategory(categoryId);
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Fetch products by category ID with optional brand filter
router.get('/category/:id/products', async (req, res) => {
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
