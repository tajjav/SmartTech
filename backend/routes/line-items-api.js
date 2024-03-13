const express = require('express');
const router = express.Router();
const cartQueries = require('../db/queries/cart');

// Create a line item in the cart
router.post('/cart', async (req, res) => {
    try {
        const newLineItem = req.body;
        const lineItem = await cartQueries.create(newLineItem);
        res.json(lineItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all line items in the cart
router.get('/cart', async (req, res) => {
    try {
        const lineItems = await cartQueries.showAll();
        res.json(lineItems);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a single line item by ID
router.get('/cart/:id', async (req, res) => {
    try {
        const lineItemId = req.params.id;
        const lineItem = await cartQueries.showById(lineItemId);
        res.json(lineItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get line items by order ID
router.get('/cart/order/:orderId', async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const lineItems = await cartQueries.showByOrderId(orderId);
        res.json(lineItems);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get line items by product ID
router.get('/cart/product/:productId', async (req, res) => {
    try {
        const productId = req.params.productId;
        const lineItems = await cartQueries.showByProductId(productId);
        res.json(lineItems);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a line item in the cart
router.put('/cart/:id', async (req, res) => {
    try {
        const lineItemId = req.params.id;
        const updatedLineItem = req.body;
        updatedLineItem.id = lineItemId;
        const lineItem = await cartQueries.update(updatedLineItem);
        res.json(lineItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a line item from the cart
router.delete('/cart/:id', async (req, res) => {
    try {
        const lineItemId = req.params.id;
        await cartQueries.remove(lineItemId);
        res.json({ message: 'Line item deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
