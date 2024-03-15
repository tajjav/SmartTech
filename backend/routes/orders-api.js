const express = require('express');
const router = express.Router();
const ordersQueries = require('../db/queries/orders');

// Create a new order
router.post('/', async (req, res) => {
    try {
        const { user_id, email, stripe_charge_id, payment_amount_cents, is_payment_received } = req.body;
        const newOrder = {user_id, email, stripe_charge_id, payment_amount_cents, is_payment_received};
        const order = await ordersQueries.create(newOrder);
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all orders
router.get('/', async (req, res) => {
    try {
        const orders = await ordersQueries.showAll();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a single order by ID
router.get('/:id', async (req, res) => {
    try {
        const orderId = req.params.id;
        const order = await ordersQueries.showById(orderId);
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get orders by user ID
router.get('/users/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const orders = await ordersQueries.showByUserId(userId);
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get orders by email
router.get('/emails/:email', async (req, res) => {
    try {
        const email = req.params.email;
        const orders = await ordersQueries.showByEmail(email);
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



// Update an existing order
router.put('/:id', async (req, res) => {
    try {
        const orderId = req.params.id;
        const { user_id, email, stripe_charge_id, payment_amount_cents, is_payment_received } = req.body;
        const updatedOrder = {user_id, email, stripe_charge_id, payment_amount_cents, is_payment_received};
        updatedOrder.id = orderId;
        const order = await ordersQueries.update(updatedOrder);
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
