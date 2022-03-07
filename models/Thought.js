const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format('MMM, DD, YYYY [at] hh:mm a')
    }
},
    {
        toJSON: {
            virtuals: true,
            getter: true
        },
        id: false
    }
);



const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format('MMM, DD, YYYY [at] hh:mm a')
    },
    username: {
        type: String,
        required: true
    },
    
    reactions: [ReactionSchema]
}, 
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
});

// Create a virtual that retrieves the length of the thought's reactions array on query
ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

// Create Thought model with the ThoughtSchema
const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;