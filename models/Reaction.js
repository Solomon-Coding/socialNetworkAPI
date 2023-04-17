const { Schema } = require('mongoose');

function niceTime(time) {
  return new Date(time).toLocaleString();
  };

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId
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
      type: Date,
      default: Date.now,
      get: niceTime,
    }
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
    versionKey: false
  }
);

module.exports = reactionSchema;
