const mongoose = require("mongoose")
const connectSchema = new mongoose.Schema({
    fname: {
        required: true,
        type: String
    },
    lname: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    PhoneNo: {
        required: true,
        type: Number
    },
    Message: {
        required: true,
        type: String

    }
})
const Contact = mongoose.model("Contact",connectSchema)
module.exports = Contact 