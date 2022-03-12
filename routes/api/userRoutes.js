const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createNewUser,
    updateUserById,
    deleteUserById,
    addToFriendList,
    removeFromFriendList

} = require('../../controllers/userController');
const { User } = require('../../models');

// GET all and POST routes @ api/users
router.route('/').get(getAllUsers).post(createNewUser);


// GET single, PUT, and DELETE routes @ api/users/:userId
router
    .route('/:id')
    .get(getUserById)
    .put(updateUserById)
    .delete(deleteUserById);

// // POST and DELETE routes @ `/api/users/:userId/friends/:friendId`
router
    .route('/:id/friends/:friendid')
    .post(addToFriendList)
    .delete(removeFromFriendList);

module.exports = router;

