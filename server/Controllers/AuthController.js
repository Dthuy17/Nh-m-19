const userModel = require('../Models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try {
        //get info from client
        const { username, password, email } = req.body;
        //create data to database
        await userModel.create({
            username: username,
            password: bcrypt.hashSync(password, 10),
            email: email,
            role: 'regular'
        });
        return res.status(200).send('register user');

    } catch (error) {
        console.log('error', error);
    }
};

const login = async (req, res) => {
    //check email ,password
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).send('Khong hop le');

    }
    const isPassvaid = bcrypt.compareSync(req.body.password, user.password);
    if (!isPassvaid) {
        return res.status(400).send('Khong hop le');
    }
    const jwtToken = jwt.sign({
        _id: user.id,
        username: user.username,
        role: user.role
    }, process.env.sceret_jwt, {
        expiresIn: 3600
    })

    return res.status(200).send({
        accessToken: jwtToken
    });

}

module.exports = {
    register: register,
    login: login
};