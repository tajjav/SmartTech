const express = require('express');
const router = express.Router();
const categoriesQueries = require('../db/queries/categories');
const productsQueries = require('../db/queries/products'); // Import products queries

router.post('/', async (req, res) => {
    try {
        const newCategory = req.body;
        const category = await categoriesQueries.create(newCategory);
        res.json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const categories = await categoriesQueries.showAll();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const categoryId = req.params.id;
        const category = await categoriesQueries.showById(categoryId);
        res.json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
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

router.delete('/:id', async (req, res) => {
    try {
        const categoryId = req.params.id;
        await categoriesQueries.remove(categoryId);
        res.json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;
