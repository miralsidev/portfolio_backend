const mongoose = require('mongoose')
require('dotenv').config()
const url = process.env.mongodb_url
const mongodbConnection = mongoose.connect(url).then(()=>{
    console.log("connect db..!");
}).catch(()=>{
    console.log("Failed db..!");

})
module.exports = mongodbConnection