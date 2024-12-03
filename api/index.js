const express = require('express');
const cors = require('cors');
const chatRouter = require('../router/chat');
const userRouter = require('../router/user');

const app = express();

app.use(cors({
    origin: "*",
    methods: [
        "GET",
        "PUT",
        "POST",
        "DELETE"
    ]
}));

app.use(express.json());
require('../db/db');
app.use('/user', async (req, res) => {
    await userRouter(req, res);
})

app.use('/chat', async(req, res) => {
    await chatRouter(req, res);
});

app.listen(3001, () => {
    console.log('Server started at 3001');
})