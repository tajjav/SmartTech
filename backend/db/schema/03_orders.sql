DROP TABLE IF EXISTS orders CASCADE;
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INT,
    email VARCHAR(255) NOT NULL,
    stripe_charge_id VARCHAR(255),
    payment_amount_cents INT NOT NULL,
    is_payment_received BOOLEAN,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
