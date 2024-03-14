/* eslint-disable camelcase */
const db = require('../connection');

/////////////////////////////////////////
// CRUD - Create, Read, Update, Delete//
////////////////////////////////////////

// create a line item of the cart
const create = (newLineItem) => {
  const { quantity, product_id, order_id } = newLineItem;
  const queryString = `
    INSERT INTO cart (
      quantity,
      product_id,
      order_id
    )
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
  const queryParams = [
    quantity,
    product_id,
    order_id
  ];

  return db
    .query(queryString,queryParams)
    .then((data) => data.rows[0]);
};

// show all line items of the cart
const showAll = () => {
  const queryString = `
    SELECT * FROM cart;
  `;
  
  return db
    .query(queryString)
    .then((data) => data.rows);
};

// show a single line item or cart entry
const showById = (id) => {
  const queryString = `
    SELECT * FROM cart
    WHERE id = $1;
  `;
  const queryParams = [id];
  
  return db
    .query(queryString,queryParams)
    .then((data) => data.rows[0]);
};

// show a single line item or cart entry by order_id
const showByOrderId = (order_id) => {
  const queryString = `
    SELECT * FROM cart
    WHERE order_id = $1;
  `;
  const queryParams = [order_id];

  return db
    .query(queryString,queryParams)
    .then((data) => data.rows);
};

// show a single line item or cart entry by product_id
const showByProductId = (product_id) => {
  const queryString = `
    SELECT * FROM cart
    WHERE product_id = $1;
  `;
  const queryParams = [product_id];

  return db
    .query(queryString,queryParams)
    .then((data) => data.rows);
};

// update a line item or cart entry
const update = (updatedLineItem) => {
  const { id, quantity, product_id, order_id } = updatedLineItem;
  const queryString = `
    UPDATE cart SET (
      quantity = $1,
      product_id = $2,
      order_id = $3
    )
    WHERE id = $4
    RETURNING *;
  `;
  const queryParams = [
    quantity,
    product_id,
    order_id,
    id
  ];
  
  return db
    .query(queryString,queryParams)
    .then((data) => data.rows[0]);
};

// delete a line item or cart entry
const remove = (id) => {
  const queryString = `
    DELETE FROM cart
    WHERE id = $1;
  `;
  const queryParams = [id];

  return db
    .query(queryString,queryParams)
    .then((data) => data.rows);
};

module.exports = { create, showAll, showById, showByOrderId, showByProductId, update, remove };