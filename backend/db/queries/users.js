const db = require('../connection');

// create a new user
const register = (newUser) => {
  const { name, email, password_hash, is_admin } = newUser;
  const queryString = `
    INSERT INTO users (
      name,
      email,
      password_hash,
      is_admin
    )
    VALUES (
      $1, $2, $3, $4
    )
    RETURNING *;
  `;
  const queryParams = [
    name,
    email,
    password_hash,
    is_admin
  ]
  return db
    .query(queryString, queryParams)
    .then((data) => data.rows[0]);
};

// login a user with email
const login = (email) => {
  const queryString = `
    SELECT * FROM users
    WHERE email = $1;
  `;
  const queryParams = [email];

  return db
    .query(queryString, queryParams)
    .then((data) => data.rows[0]);
};

module.exports = { register, login };
