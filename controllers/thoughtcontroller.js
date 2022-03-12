const { User, Thought } = require('../models');

const thoughtController = {

    getAllThoughts(req, res) {
        // go to the Thought model and find all the users
        Thought.find({})
        // after that is completed THEN take all of that data and send it in json format to the front end
        .then(dbUsers => res.json(dbUsers))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    getThoughtById(req, res) {
        console.log("GETTING A THOUGHT BY ITS ID", req.params)
        Thought.findOne({ id: req.params.thoughtId})
        .then(dbUsers => res.json(dbUsers))
        .catch(err => {
            console.log(err);
            res.status(404).json(err);
        });
    }, 
    createNewThought(req, res) {
        console.log("INFO WERE INSERTING INTO DB FROM FRONTEND", req.body)
        // taking the req.body from the frontend and putting it into the Thought model of the database
        var t = Thought.create(req.body)
        // once info is inserted send via json format showing inserted data
        .then(thought => {
            User.findOneAndUpdate({_id:req.body.userid }, {$addToSet: {thoughts:thought._id}} )
            .then(dbUsers => res.json(dbUsers))
            .catch(err => {
            console.log(err);
            res.status(500).json(err);
            });
        })
        
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    }, 
    updateThought(req, res) {
        console.log("Getting a Thought by Id", req.params.Id)
        Thought.findOneAndUpdate(req.params.thoughtId)
        // after that is completed THEN take all of that data and send it in json format to the front end
        .then(dbUsers => res.json(dbUsers))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    removeThought(req, res) {
        console.log("Deleting the Thought by it's ID", req.params.Id)
        Thought.findOneAndDelete({ id: req.params.ThoughtId})
        .then(dbUsers => res.json(dbUsers))
        .catch(err => {
            console.log(err);
            res.status(404).json(err);
        });
    },
    createReaction(req, res) {
        console.log("creating a reaction", req.params)
        Thought.findOneAndUpdate({ id: req.params })
        .push(body.thoughtId)
        .then(dbUsers => res.json(dbUsers))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    removeReaction(req, res) {
        console.log("removing a reaction", req.params.Id)
        Thought.findOneAndRemove({ id: req.params.ThoughtId })
        .pull(body.reactionId)
        .then(dbUsers => res.json(dbUsers))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    }

}

module.exports = thoughtController;