const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userModel = require('../Models/UserModel');
const getlistUser = async (req, res) => {

    try {
        const users = await userModel.find();
        return res.status(200).send(users);

    } catch (error) {

    }
}
const postUser = async (req, res) => {

    try {
        const { username, password, email, role } = req.body;
        userModel.create({
            username: username,
            password: bcrypt.hashSync(password, 10),
            email: email,
            role: role,
        });
        return res.status(200).send('create user success');
    } catch (error) {

    }
}
const deleteUser = async (req, res) => {
    try {
        const userId = req.params.userId;

        await userModel.findByIdAndRemove(userId);
        return res.status(200).send('delete user success');
    } catch (error) {

    }

}
module.exports = {
    getlistUser: getlistUser,
    postUser: postUser,
    deleteUser: deleteUser
}