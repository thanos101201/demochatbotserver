const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    userTag: {
        type: String,
        required: true
    }
});

const chatModel = mongoose.model("Chat", chatSchema);

module.exports = chatModel;