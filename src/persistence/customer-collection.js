const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    joinedDate: { type: Date, required: false }
})

module.exports = mongoose.model('customer', customerSchema)