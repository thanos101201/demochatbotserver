const chatModel = require('../../models/chat');

const get = async (req, res) => {
    const email = req.query.email;
    await chatModel.find({
        email : email
    }).then((resp1) => {
        res.status(200).send({
            'message': resp1
        })
    }).catch((er1) => {
        res.status(400).send({
            'error': er1
        })
    })
}

module.exports = get;