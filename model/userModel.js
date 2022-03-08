const mongoose = require('mongoose');
const review = require('../model/reviews.js');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/exploreamerica')
.then(() => {
    console.log('DB connection open')
})
.catch(err => {
    console.log(err)
})


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
        
    }
})

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', userSchema);