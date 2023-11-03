const jwt = require('jsonwebtoken');
const userModel = require('../Models/UserModel')

const isAuthentication = (req, res, next) => {
    try {
        const bearerHeader = req.headers['authorization'];
        const accessToken = bearerHeader.split(' ')[1];
        const decodejwt = jwt.verify(accessToken, process.env.sceret_jwt);
        //set user id to req object
        req.userId = decodejwt._id;
        next();
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(401).send('Token het han');
        }
        return res.status(401).send('Authentication not valid');
    }
}
//check role admin
const isAdmin= async (req,res,next)=>{
  try {
      const userId = req.userId;
      const user = await userModel.findById(userId);
      if(user.role=='admin'){
          next();
      }
  } catch (error) {
    return res.status(401).send('Authentication not valid');
  }

}

module.exports = {
    isAuthentication: isAuthentication,
    isAdmin: isAdmin
}