const mongoose = require('mongoose');
async function connectDatabase(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/api');
        console.log('connect db sucsess');
    } catch (error) {
        console.log('connect db fail',error);
    }
}

module.exports = connectDatabase;