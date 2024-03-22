/* eslint-disable camelcase */
const db = require('../connection');

/////////////////////////////////////////
// CRUD - Create, Read, Update, Delete//
////////////////////////////////////////

// create a product
const create = (newProduct) => {
  const { name, description, image_1, image_2, image_3, price_cents, quantity, category_id, brand, model, year, is_clearance } = newProduct;
  const queryString = `
    INSERT INTO products (
      name,
      description,
      image_1,
      image_2,
      image_3,
      price_cents,
      quantity,
      category_id,
      brand,
      model,
      year,
      is_clearance
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
    RETURNING *;
  `;
  const queryParams = [
    name,
    description,
    image_1,
    image_2,
    image_3,
    price_cents,
    quantity,
    category_id,
    brand,
    model,
    year,
    is_clearance
  ];

  return db
    .query(queryString,queryParams)
    .then((data) => data.rows[0]);
};

// show all products
const showAll = () => {
  const queryString = `
    SELECT * FROM products LIMIT  9;
  `;

  return db
    .query(queryString)
    .then((data) => data.rows);
};

// show a single product
const showById = (id) => {
  const queryString = `
    SELECT * FROM products
    WHERE id = $1;
  `;
  const queryParams = [id];

  return db
    .query(queryString,queryParams)
    .then((data) => data.rows[0]);
};

// show products by category
const showByCategoryId = (category_id) => {
  const queryString = `
    SELECT * FROM products
    WHERE category_id = $1;
  `;
  const queryParams = [category_id];

  return db
    .query(queryString,queryParams)
    .then((data) => data.rows);
};


const update = (updatedProduct) => {
  const { id, name, description, image_1, image_2, image_3, price_cents, quantity, category_id, brand, model, year, is_clearance } = updatedProduct;
  const queryString = `
    UPDATE products
    SET
      name = $1,
      description = $2,
      image_1 = $3,
      image_2 = $4,
      image_3 = $5,
      price_cents = $6,
      quantity = $7,
      category_id = $8,
      brand = $9,
      model = $10,
      year = $11,
      is_clearance = $12
    WHERE
      id = $13
    RETURNING *;
  `;
  const queryParams = [
    name,
    description,
    image_1,
    image_2,
    image_3,
    price_cents,
    quantity,
    category_id,
    brand,
    model,
    year,
    is_clearance,
    id
  ];

  return db
    .query(queryString, queryParams)
    .then((data) => data.rows[0]);
};


// delete a product
const remove = (id) => {
  const queryString = `
    DELETE FROM products
    WHERE id = $1;
  `;
  const queryParams = [`${id}`];

  return db
    .query(queryString,queryParams)
    .then((data) => data.rows);
};


// fetch products by brand
const getProductsByBrand = (brand) => {
  const queryString = `
    SELECT * FROM products
    WHERE brand = $1 LIMIT  9;
  `;
  const queryParams = [brand];

  return db
  .query(queryString, queryParams)
  .then((data) => {
    console.log('data.rows:', data.rows)
    return data.rows});

}

const getProductsByPriceRange = (minPrice, maxPrice) => {
  const queryString = `
      SELECT *
      FROM products
      WHERE price_cents >= $1 AND price_cents <= $2;
  `;
  const queryParams = [minPrice, maxPrice];

  return db.query(queryString, queryParams)
      .then((data) => data.rows);
};

const searchProductsByName = (query) => {
  const queryString = `
    SELECT * FROM products
    WHERE name ILIKE $1;
  `;
  const queryParams = [`%${query}%`];

  return db
    .query(queryString, queryParams)
    .then((data) => data.rows);
};



module.exports = { create, showAll, showById, showByCategoryId, update, remove, getProductsByBrand, getProductsByPriceRange, searchProductsByName  };
