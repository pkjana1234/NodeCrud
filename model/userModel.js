const mongoose = require("mongoose")
const Schema = mongoose.Schema


const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    }
})
const UserModel = new mongoose.model('user', userSchema)
module.exports = UserModel