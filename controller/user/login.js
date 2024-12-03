const userModel = require("../../models/user");

const login = async(req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(`${email} : ${password}`);
    
    userModel.find({
        email: email,
        password: password
    }).then((response) => {
        if(response.length ===  0){
            res.status(403).send({
                'message': 'Invalid credentials'
            });
            return;
        }
        res.status(200).send({
            'message': 'User can proceed',
            'name' : response[0].name
        });
    }).catch((er) => {

    });
}

module.exports = login;