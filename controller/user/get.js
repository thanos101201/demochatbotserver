const userModel = require("../../models/user");

const get = async (req, res) => {

    const email = req.query.email;
    userModel.find({
        email: email
    }).then((response) => {
        if(response.length === 0){
            res.status(404).send({
                'message': 'User does not exists.'
            })
            return;
        }
        res.status(200).send({
            'message': "User found",
            'data': response[0]
        })
    }).catch((er) => {
        res.status(400).send(er);
    })
}

module.exports = get;