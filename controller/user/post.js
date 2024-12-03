const userModel = require("../../models/user");

const post = async(req, res) => {
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;

    userModel.find({
        email: email
    }).then(async(response) => {
        if(response.length > 0){
            res.status(403).send({
                'message': "Email already registered"
            });
            return;
        }
        var userm = new userModel();
        userm.email = email;
        userm.name = name;
        userm.password = password;
        await userm.save().then((saveResponse) => {
            res.status(200).send({
                'message' : 'User registered'
            });
        }).catch((saveErr) => {
            res.status(400).send(saveErr);
        });
    }).catch((err) => {
        res.status(400).send(err);
    })
}

module.exports = post;