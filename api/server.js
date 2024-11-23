const express = require('express');
const cors = require('cors');
const get = require('../chat/get');
const post = require('../chat/post');

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
app.get('/', async (req, res) => {
    await get(req, res);
})

app.post('/', async(req, res) => {
    await post(req, res);
});

app.listen(3001, () => {
    console.log('Server started at 3001');
})