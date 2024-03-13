/*
 * All routes for Products Data are defined here
 * Since this file is loaded in server.js into api/products,
 *   these routes are mounted onto /api/products
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const productsQueries = require('../db/queries/products');
//////////
// CRUD //
//////////

// Create a product - POST
router.post('/', (req, res) => {
  const { user_id, user_isAdmin } = req.session;
  if (!user_id) {
    return res.status(401).json({ message: 'User is not logged in' });
  }
  if (!user_isAdmin) {
    return res.status(403).json({message: 'You donot have required permission to perform action'})
  }

  const { product } = req.body;
  if (!product) {
    return res
      .status(400)
      .json({ message: 'All properties must be provided to create a product' });
  }

  const newNote = { user_id, content };
  notesQueries
    .create(newNote)
    .then((note) => {
      res.status(201).json({ message: 'Note created!', note });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: 'Error creating note', error: err.message });
    });
});

// Read all - GET
router.get('/', (req, res) => {
  let query = notesQueries.getAll();

  const { user_id } = req.query;
  if (user_id) {
    query = notesQueries.getByUserId(user_id);
  }

  query
    .then((notes) => {
      res.status(201).json({ message: 'Here all notes!', notes });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: 'Error reading notes', error: err.message });
    });
});

// Read one - GET
router.get('/:id', (req, res) => {
  notesQueries
    .getById(req.params.id)
    .then((note) => {
      if (!note) {
        return res.status(400).json({ message: 'Note not found!' });
      }

      res.status(201).json({ message: 'Here is your note!', note });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: 'Error reading note', error: err.message });
    });
});

// Update - POST
router.post('/:id/edit', (req, res) => {
  const { user_id } = req.session;
  if (!user_id) {
    return res.status(401).json({ message: 'User is not logged in' });
  }

  const { content } = req.body;
  if (!content) {
    return res
      .status(400)
      .json({ message: 'All properties must be provided to update a note' });
  }

  const { id } = req.params;
  notesQueries
    .getById(id)
    .then((note) => {
      if (!note) {
        return res.status(404).json({ message: 'Note not found!' });
      }

      console.log(note);
      const noteBelongsToUser = note.user_id === user_id;
      if (!noteBelongsToUser) {
        return res
          .status(401)
          .json({ message: 'Note does not belongs to you!' });
      }

      return notesQueries.update({ id, content });
    })
    .then((updatedNote) => {
      res.status(201).json({ message: 'Note updated!', note: updatedNote });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: 'Error updating note', error: err.message });
    });
});

// Delete - POST
router.post('/:id/delete', (req, res) => {
  const { user_id } = req.session;
  if (!user_id) {
    return res.status(401).json({ message: 'User is not logged in' });
  }

  const { id } = req.params;
  notesQueries
    .getById(id)
    .then((note) => {
      if (!note) {
        return res.status(404).json({ message: 'Note not found!' });
      }

      const noteBelongsToUser = note.user_id === user_id;
      if (!noteBelongsToUser) {
        return res
          .status(401)
          .json({ message: 'Note does not belongs to you!' });
      }

      return notesQueries.remove(id);
    })
    .then(() => {
      res.status(204).json();
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: 'Error deleting note', error: err.message });
    });
});

// rendering route
// router.get('/notes', (req, res) => {
//   const { user_id } = req.session;
//   if (!user_id) {
//     const templateVars = { message: 'User is not logged in' };
//     return res.status(401).render('error', templateVars);
//   }

//   const templateVars = { user_id };
//   res.render('notes', templateVars);
// }); // disabled as we are not rendering from backend


module.exports = router;
