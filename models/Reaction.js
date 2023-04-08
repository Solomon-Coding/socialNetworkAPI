const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const reactionSchema = new Schema(
  {
    reactionId: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type:Date,
        timestamps: true,
    }
  },
  {
    toJSON: {
        getters: true,
    },
  }
);

const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;
