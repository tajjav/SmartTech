const express = require('express');
const router = express.Router();
const ordersQueries = require('../db/queries/orders');

// Create a new order
router.post('/orders', async (req, res) => {
    try {
        const newOrder = req.body;
        const order = await ordersQueries.create(newOrder);
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all orders
router.get('/orders', async (req, res) => {
    try {
        const orders = await ordersQueries.showAll();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a single order by ID
router.get('/orders/:id', async (req, res) => {
    try {
        const orderId = req.params.id;
        const order = await ordersQueries.showById(orderId);
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get orders by user ID
router.get('/orders/user/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const orders = await ordersQueries.showByUserId(userId);
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get orders by email
router.get('/orders/email/:email', async (req, res) => {
    try {
        const email = req.params.email;
        const orders = await ordersQueries.showByEmail(email);
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update an existing order
router.put('/orders/:id', async (req, res) => {
    try {
        const orderId = req.params.id;
        const updatedOrder = req.body;
        updatedOrder.id = orderId;
        const order = await ordersQueries.update(updatedOrder);
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
