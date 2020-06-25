const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = {
    chatSchema: {},

    userSchema: {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true }
    },

    contentSchema: {},

    blogSchema: {
        user: { type: Schema.Types.ObjectId, ref: "User", required: false },
        title: { type: String, required: true }, 
        date: { type: String, default: Date.now }, 
        content: { type: String, required: true },
        likes: { type: Number, required: false, default: 0 },
        url: { type: String, required: true },
        comments: [ { type: String, required: false } ]
    },
}