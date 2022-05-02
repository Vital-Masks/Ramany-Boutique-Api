const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    zipcode: { type: String, required: true },
    paymentMethod: { type: String, required: true },
    totalCost: { type: Number, required: true },
    customerId: { type: mongoose.Schema.ObjectId, ref: 'customers', required: false },
    status: { type: String, required: true },
    productDetail: {
        "productName": { type: String, required: true },
        "productId": { type: mongoose.Schema.ObjectId, ref: 'products', required: false },
        "quantity": { type: Number, required: true },
        "price": { type: Number, required: true }
    },
})

module.exports = mongoose.model('orders', customerSchema)