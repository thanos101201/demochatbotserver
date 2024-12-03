const chatModel = require('../../models/chat');
const userModel = require('../../models/user');

const post = async(req, res) => {
    const query = req.body.query;
    const userTag = req.body.userTag;
    const email = req.body.email;
    
    userModel.find({
        email: email
    }).then(async (resp1) => {
        if(resp1.length === 0){
            res.status(403).send({
                'message': 'User does not exist'
            });
            return;
        }
        let userm = new chatModel();
        userm.email = email;
        userm.text = query;
        userm.userTag = userTag;
        console.log(`${email}:${query}:${userTag}`);
        
        await userm.save().then((resp2) => {
            res.status(200).send({
                'message': 'Chat added'
            })
        }).catch((er2) => {
            res.status(400).send({
                'error' : er1
            });
        });
    }).catch((er2) => {
        res.status(400).send(er2);
    })
}

module.exports = post;