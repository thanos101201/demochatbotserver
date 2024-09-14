const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json);
app.use(cors({
    origin: '*',
    methods: [
        'GET',
        'PUT',
        'POST',
        'DELETE'
    ]
}));

app.listen(3001, () => {
    console.log("Server started at port 3001."); 
});