// load .env data into process.env
require('dotenv').config();

// Web server config
// const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const cookieSession = require('cookie-session');
const bcrypt = require("bcryptjs");
const cors = require('cors');



const PORT = process.env.PORT || 8080;
const app = express();


//-----------------------------Middlewares ----------------------------------//
// app.set('view engine', 'ejs'); // disabled ejs template engine as we are not using views in the backend

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 // for standard form submissions, non ajax
// app.use(
//   '/styles',
//   sassMiddleware({
//     source: __dirname + '/styles',
//     destination: __dirname + '/public/styles',
//     isSass: false, // false => scss, true => sass
//   })
// ); // disabled sassMiddleware as we are not rendering from backend
app.use(cors());
app.use(express.static('public'));
app.use(
  cookieSession({
    name: 'session',
    keys: ['myRandomSuperSecretKey', 'anotherRandomString'],

    // Cookie Options
    // maxAge: 24 * 60 * 60 * 1000 // 24 hours
    maxAge: 10 * 60 * 1000, // 10 min
  })
);

//-----------------------------Routes ----------------------------------//
// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersApiRoutes = require('./routes/users-api');
const categoriesApiRoutes = require('./routes/categories-api');
const productsApiRoutes = require('./routes/products-api');
const lineItemsApiRoutes = require('./routes/line_items-api');
const ordersApiRoutes = require('./routes/orders-api');
const stripeApiRoutes = require('./routes/stripe');


// Mount all resource routes
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/users', usersApiRoutes);
app.use('/api/categories', categoriesApiRoutes);
app.use('/api/products', productsApiRoutes);
app.use('/api/line_items', lineItemsApiRoutes); // cart should not be present in the backend at all. It is the line_item. Routes for line_items are not required.
app.use('/api/orders', ordersApiRoutes);
app.use('/api/stripe', stripeApiRoutes);

// Note: mount other resources here, using the same pattern above

//-----------------------------End Points ----------------------------------//
// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
// app.get('/', (req, res) => {
//   res.render('index');
// }); // disabled as we are not rendering from backend

// Catch all route
app.use((req, res) => {
  res.status(404).send({ message: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
