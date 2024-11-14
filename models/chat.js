const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});

const chatModel = mongoose.model("Chat", chatSchema);

module.exports = chatModel;