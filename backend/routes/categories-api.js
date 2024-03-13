/*
 * All routes for Categories Data are defined here
 * Since this file is loaded in server.js into api/categories,
 *   these routes are mounted onto /api/categories
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const categoriesQueries = require('../db/queries/categories');
//////////
// CRUD //
/////////
// Create category - POST
router.post('/', (req, res) => {
  const { user_id, user_isAdmin } = req.session;
  if (!user_id) {
    return res.status(401).json({ message: 'User is not logged in' });
  }
  if (!user_isAdmin) {
    return res.status(403).json({message: 'You donot have required permission to perform action'})
  }

  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ message: 'All properties must be provided to create a category' });
  }

  const newCategory = { name };
  categoriesQueries
    .create(newCategory)
    .then((category) => {
      res.status(201).json({ message: 'Category created!', category });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: 'Error creating category', error: err.message });
    });
});

// Show all categories - GET
router.get('/', (req, res) => {
  let query = categoriesQueries.showAll();

                                                                              // const { user_id } = req.query;
                                                                              // if (user_id) {
                                                                              //   query = notesQueries.getByUserId(user_id);
                                                                              // }

  query
    .then((categories) => {
      res.status(201).json({ message: 'Here are all the categories!', categories });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: 'Error reading categories', error: err.message });
    });
});

// Show a single category - GET
router.get('/:id', (req, res) => {
  categoriesQueries
    .showById(req.params.id)
    .then((category) => {
      if (!category) {
        return res.status(400).json({ message: 'Category not found!' });
      }

      res.status(201).json({ message: 'Here is your category!', category });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: 'Error reading category', error: err.message });
    });
});

// Update a category - POST
router.post('/:id/edit', (req, res) => {
  const { user_id, user_isAdmin } = req.session;
  if (!user_id) {
    return res.status(401).json({ message: 'User is not logged in' });
  }
  if (!user_isAdmin) {
    return res.status(403).json({message: 'You donot have required permission to perform action'})
  }

  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ message: 'All properties must be provided to update a category' });
  }

  const { id } = req.params;
  categoriesQueries
    .showById(id)
    .then((category) => {
      if (!category) {
        return res.status(404).json({ message: 'Category not found!' });
      }

      console.log(category);
                                                                          // const noteBelongsToUser = note.user_id === user_id;
                                                                          // if (!noteBelongsToUser) {
                                                                          //   return res
                                                                          //     .status(401)
                                                                          //     .json({ message: 'Note does not belongs to you!' });
                                                                          // }
    })                                                                   
    .then((category) => {
      const updatedCategory = {id, name};
      return categoriesQueries.update(updatedCategory);
    })
    .then((updatedCategory) => {
      res.status(201).json({ message: 'Category updated!', category: updatedCategory });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: 'Error updating category', error: err.message });
    });
});

// Delete - POST
router.post('/:id/delete', (req, res) => {
  const { user_id, user_isAdmin } = req.session;
  if (!user_id) {
    return res.status(401).json({ message: 'User is not logged in' });
  }
  if (!user_isAdmin) {
    return res.status(403).json({message: 'You donot have required permission to perform action'})
  }
  const { id } = req.params;
  categoriesQueries
    .showById(id)
    .then((category) => {
      if (!category) {
        return res.status(404).json({ message: 'Category not found!' });
      }

                                                                              // const noteBelongsToUser = note.user_id === user_id;
                                                                              // if (!noteBelongsToUser) {
                                                                              //   return res
                                                                              //     .status(401)
                                                                              //     .json({ message: 'Note does not belongs to you!' });
                                                                              // }

      return categoriesQueries.remove(id);
    })
    .then(() => {
      res.status(204).json({message: 'Delete successful'});
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: 'Error deleting category', error: err.message });
    });
});

module.exports = router;