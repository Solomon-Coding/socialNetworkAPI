const { Schema } = require('mongoose');

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
    createdAt: Date,
  },
  {
    versionKey: false
  }
);

// const Reaction = model('Reaction', reactionSchema);

module.exports = reactionSchema;
