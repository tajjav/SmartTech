/* eslint-disable camelcase */
const db = require('../connection');

/////////////////////////////////////////
// CRUD - Create, Read, Update, Delete//
////////////////////////////////////////

// create an order
const create = (newOrder) => {
  const { user_id, email, stripe_charge_id, payment_amount_cents, is_payment_received } = newOrder;
  const queryString = `
    INSERT INTO orders (
      user_id,
      email,
      stripe_charge_id,
      payment_amount_cents,
      is_payment_received
    )
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;
  const queryParams = [
    user_id,
    email,
    stripe_charge_id,
    payment_amount_cents,
    is_payment_received
  ];

  return db
    .query(queryString,queryParams)
    .then((data) => {
      const order = data.rows[0];
      line_items(order.id, line_items );
      
    });
};

const createLineItems = (orderId, line_items) => {
  // iterate over each line item
  // insert into the table line_item using create line-item querry ,
  // any change in orderId and line_items, this function should run. 

  
}

// show all orders
const showAll = () => {
  const queryString = `
    SELECT * FROM orders;
  `;
  
  return db
    .query(queryString)
    .then((data) => data.rows);
};

// show a single order
const showById = (id) => {
  const queryString = `
    SELECT * FROM orders
    WHERE id = $1;
  `;
  const queryParams = [id]
  
  return db
    .query(queryString,queryParams)
    .then((data) => data.rows[0]);
};

// show orders for a user
const showByUserId = (user_id) => {
  const queryString = `
    SELECT * FROM orders
    WHERE user_id = $1;
  `;
  const queryParams = [user_id];

  return db
    .query(queryString,queryParams)
    .then((data) => data.rows);
};

// show orders for an email
const showByEmail = (email) => {
  const queryString = `
    SELECT * FROM orders
    WHERE email = $1;
  `;
  const queryParams = [email];

  return db
    .query(queryString,queryParams)
    .then((data) => data.rows);
};

// update an order
const update = (updatedOrder) => {
  const { id, user_id, email, stripe_charge_id, payment_amount_cents, is_payment_received } = updatedOrder;
  const queryString = `
    UPDATE orders 
    SET 
      user_id = $1,
      email = $2,
      stripe_charge_id = $3,
      payment_amount_cents = $4,
      is_payment_received = $5
    WHERE 
      id = $6
    RETURNING *;
  `;
  const queryParams = [
    user_id,
    email,
    stripe_charge_id,
    payment_amount_cents,
    is_payment_received,
    id
  ];
  
  return db
    .query(queryString,queryParams)
    .then((data) => data.rows[0]);
};


module.exports = { create, showAll, showById, showByUserId, showByEmail, update };