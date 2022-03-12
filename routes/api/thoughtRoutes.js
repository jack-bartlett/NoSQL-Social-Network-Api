const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createNewThought,
    updateThought,
    removeThought,
    createReaction,
    removeReaction
} = require('../../controllers/thoughtController');

// api/thoughts
router.route('/').get(getAllThoughts);
router.route('/').post(createNewThought);

// api/thoughts/:thoughtId
router
    .route('/:thoughid')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought);

// api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtid/reactions')
    .post(createReaction);

// /api/thoughts/:thoughtId/reactions/reactionId
router
    .route('/:thoughtid/reactions/:reactionid')
    .delete(removeReaction);

module.exports = router;




