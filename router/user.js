const express = require('express');

const userRouter = express.Router();
const get = require('../controller/user/get');
const login = require('../controller/user/login');
const post = require('../controller/user/post');
userRouter.get('/', (req, res) => {
    console.log(req.query);
    
    get(req, res);

});

userRouter.post('/login', (req, res) => {
    login(req, res);
});

userRouter.post('/', (req, res) => {
    post(req, res);
});

module.exports = userRouter;