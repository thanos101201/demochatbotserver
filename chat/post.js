const chatModel = require('../models/chat');

const post = async(req, res) => {
    var user = req.body.user;
    var query = req.body.query;
    let userm = new chatModel();
    userm.user = user;
    userm.text = query;
    console.log(`${user}:${query}`);
    
    await userm.save().then((resp1) => {
        res.status(200).send({
            'message': 'Chat added'
        })
    }).catch((er1) => {
        res.status(400).send({
            'error' : er1
        });
    });
}

module.exports = post;