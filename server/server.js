const express = require('express');
const app = express();
const cors =require('cors');

const userRoute = require('./Router/UserRoute');
const authRoute = require('./Router/AuthRoute')
const connectDb = require('./Services/ConnectDbServices');

const port= 5000  ;

require('dotenv').config()
//middleware apply cors all request
app.use(cors());
//middleware get info from client by req.body
app.use(express.json());

// connect database
connectDb();

//middleware router
app.use('/auth/admin',userRoute);
app.use('/api/auth',authRoute);


app.listen(port,function(){
    console.log(`sever is running ${port}`);
});
