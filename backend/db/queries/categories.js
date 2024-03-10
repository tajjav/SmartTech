/* eslint-disable camelcase */
const db = require('../connection');

/////////////////////////////////////////
// CRUD - Create, Read, Update, Delete//
////////////////////////////////////////

// create a category
const create = (newCategory) => {
  const { name } = newCategory;
  const queryString = `
    INSERT INTO categories (
      name
    )
    VALUES ($1)
    RETURNING *;
  `;
  const queryParams = [`${name}`];

  return db
    .query(queryString,queryParams)
    .then((data) => data.rows[0]);
};

// show all categories
const showAll = () => {
  const queryString = `
    SELECT * FROM categories;
  `;
  
  return db
    .query(queryString)
    .then((data) => data.rows);
};

// show a single category
const showById = (id) => {
  const queryString = `
    SELECT * FROM categories
    WHERE id = $1;
  `;
  const queryParams = [`${id}`]
  
  return db
    .query(queryString,queryParams)
    .then((data) => data.rows[0]);
};

// update a category
const update = (updatedCategory) => {
  const { id, name } = updatedCategory;
  const queryString = `
    UPDATE categories SET name = $1
    WHERE id = $2
    RETURNING *;
  `;
  const queryParams = [`${name}, ${id}`];
  
  return db
    .query(queryString,queryParams)
    .then((data) => data.rows[0]);
};

// delete a category
const remove = (id) => {
  const queryString = `
    DELETE FROM categories
    WHERE id = $1;
  `;
  const queryParams = [`${id}`];

  return db
    .query(queryString,queryParams)
    .then((data) => data.rows);
};

module.exports = { create, showAll, showById, update, remove };