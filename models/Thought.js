const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

function niceTime(time) {
return new Date(time).toLocaleString();
};

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
        default: Date.now,
        get: niceTime,
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
    toJSON: {
      getters: true,
    },
    id: false,
  },
  {
    versionKey: false
  }
);

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
