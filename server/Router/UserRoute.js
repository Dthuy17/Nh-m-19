const express = require('express');
const router = express.Router();
const userController = require('../Controllers/UserController');
const authMiddleware = require('../middeware/AuthMiddeware')
 

router.get('/user',[
    authMiddleware.isAuthentication
], userController.getlistUser);
router.post('/user/create',[
    authMiddleware.isAuthentication,
    authMiddleware.isAdmin 
], userController.postUser);

router.delete('/user/delete/:userId',[
    authMiddleware.isAuthentication,
    authMiddleware.isAdmin 
], userController.deleteUser);



module.exports = router;
