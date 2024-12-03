const express = require('express');

const chatRouter = express.Router();
const get = require('../controller/chat/get');
const post = require('../controller/chat/post');

chatRouter.get('/', (req, res) => {
    get(req, res);
});

chatRouter.post('/', (req, res) => {
    post(req, res);
});

module.exports = chatRouter;