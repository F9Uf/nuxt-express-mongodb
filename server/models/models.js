const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UsersSchema = new Schema({
    name: String,
    age: Number
})

const model = mongoose.model('user', UsersSchema)

module.exports = model