const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReactions,

} = require('../../controllers/thoughtController.js');

// /api/thoughts
router
  .route('/')
  .get(getThoughts)
  .post(createThought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

  // /api/thoughts/:thoughtId/reactions
router
  .route('/:thoughtId/reactions')
  .post(createReaction)
  .delete(deleteReactions);

  // // /api/thoughts/:thoughtId/reactions/:reactionId
  // router
  // .route('/:thoughtId/reactions/:reactionId')
  // .post(updateThought)
  // .delete(deleteThought);


module.exports = router;
