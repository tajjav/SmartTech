/* eslint-disable camelcase */
/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const userQueries = require('../db/queries/users');

                                                                                          // render register page, not required for backend
                                                                                          // router.get('/register', (req, res) => {
                                                                                          //   const { user_id } = req.session;
                                                                                          //   if (user_id) {
                                                                                          //     const templateVars = { message: 'User is already logged in' };
                                                                                          //     return res.status(401).render('error', templateVars);
                                                                                          //   }

                                                                                          //   res.render('register');
                                                                                          // });


                                                                                          // render login page, not required for backend
                                                                                          // router.get('/login', (req, res) => {
                                                                                          //   const { user_id } = req.session;
                                                                                          //   if (user_id) {
                                                                                          //     const templateVars = { message: 'User is already logged in' };
                                                                                          //     return res.status(401).render('error', templateVars);
                                                                                          //   }

                                                                                          //   res.render('login');
                                                                                          // });

// create a new user
router.post('/register', (req, res) => {
  const { name, email, password_hash, is_admin } = req.body;
  if (!name || !email || !password_hash) {
    return res
      .status(403)
      .json({ message: 'Provide missing fields to register!' });
  }

  const newUser = { name, email, password_hash, is_admin};
  userQueries
    .register(newUser)
    .then(() => {
      res.json({message: "User successfully registered"});
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: `Error registering user ${err.message}`});
    });
});

// login a user with email
router.post('/login', (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res
      .status(403)
      .json({ message: 'Provide email to login!' });
  }

  userQueries
    .login(email)
    .then((user) => {
      console.log('user', user);
      if (!user) {
        return res
          .status(403)
          .json({ message: 'Invalid credentials!' });
      }

      req.session.user_id = user.id;
      if (user.is_admin) {
        req.session.user_isAdmin = user.is_admin;
      }
      res.json({message: 'Successfully Login'});
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// logout a user
router.post('/logout', (req, res) => {
  req.session = null;
  res.json({message: 'Successfully Logout'});
});

module.exports = router;
