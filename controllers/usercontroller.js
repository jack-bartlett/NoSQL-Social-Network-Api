const { User, Thought } = require('../models');

const userController = {
    getAllUsers(req, res) {
        // go to the User model and find all the users
        User.find({})
        // after that is completed THEN take all of that data and send it in json format to the front end
        .then(dbUsers => res.json(dbUsers))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    }, 
    getUserById(req, res) {
        console.log("GETTING THE USERS ID", req.params)
        User.findOne({ id: req.params.userId})
        .then(dbUsers => res.json(dbUsers))
        .catch(err => {
            console.log(err);
            res.status(404).json(err);
        });
    }, 
    createNewUser(req, res) {
        console.log("INFO WERE INSERTING INTO DB FROM FRONTEND", req.body)
        // taking the req.body from the frontend and putting it into the User model of the database
        User.create(req.body)
        // once info is inserted send via json format showing inserted data
        .then(dbUsers => res.json(dbUsers))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    }, 
    updateUserById(req, res) {
        console.log("Getting a user by Id", req.params.id)
        console.log(req.body)
        User.findOneAndUpdate({_id:req.params.id}, req.body)
        // after that is completed THEN take all of that data and send it in json format to the front end
        .then(dbUsers => res.json(dbUsers))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    deleteUserById(req, res) {
        console.log("Deleting the User by their ID", req.params.id)
        User.findOneAndDelete({_id:req.params.id})
        .then(dbUsers => res.json(dbUsers))
        .catch(err => {
            console.log(err);
            res.status(404).json(err);
        });
    },
    addToFriendList(req, res) {
        console.log("updating by adding a friend to the users friends list", req.params.id)
        User.findOneAndUpdate({_id:req.params.id }, {$addToSet: {friends:req.params.friendid}} )
        .then(dbUsers => res.json(dbUsers))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    removeFromFriendList(req, res) {
        console.log("updating by adding a friend to the users friends list", req.params.id)
        User.findOneAndUpdate({_id: req.params.id}, {$pull: {friends:req.params.friendid}} )
        .then(dbUsers => res.json(dbUsers))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    }



}

module.exports = userController;