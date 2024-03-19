DROP TABLE IF EXISTS cart CASCADE;
CREATE TABLE cart (
    id SERIAL PRIMARY KEY,
    quantity INT NOT NULL,
    product_id INT NOT NULL,
    order_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
);


-- create trigger carts 
-- after INSERT 
-- on line_tiems 
-- for each row 
-- update carts set total = total - {product.quantity}
-- where cart_id = {cart_id};