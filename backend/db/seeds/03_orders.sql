INSERT INTO orders (user_id, email, stripe_charge_id, payment_amount_cents, is_payment_received) VALUES
(1, 'john@example.com', 'stripe_charge_id_123', 299900, true),
(2, 'jane@example.com', 'stripe_charge_id_456', 159900, true),
(1, 'john@example.com', 'stripe_charge_id_789', 89900, false),
(3, 'admin@example.com', 'stripe_charge_id_012', 79900, true),
(4, 'alice@example.com', 'stripe_charge_id_345', 129900, true);

