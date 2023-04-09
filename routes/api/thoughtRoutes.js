const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router
  .route('/')
  .get(getThoughts)
  .get(getSingleThought)
  .post(createThought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .put(updateThought)
  .delete(deleteThought);

  // /api/thoughts/:thoughtId/reactions
router
  .route('/:thoughtId/reactions')
  .post(updateThought)
  .delete(deleteThought);

module.exports = router;
