const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    
},{ timestamps: {
    createdAt: 'joined_date',
    updatedAt: 'updated_at'
  } })

module.exports = mongoose.model('customer', customerSchema)