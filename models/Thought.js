const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
  {
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
    },
    createdAt: {
        type: Date,
        timestamps: true,
        required: true,
        unique: true,
        trim: true,
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema],
  },
  {
    versionKey: false
  }
);

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
