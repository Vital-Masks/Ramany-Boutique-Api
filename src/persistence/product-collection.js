const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    productCode: { type: String, required: true },
    count: { type: Number, required: true },
    productType: { type: String, required: false },
    mainCategortyId: { type: mongoose.Schema.ObjectId, ref: 'mainCategory', required: false },
    subCategortyId: { type: mongoose.Schema.ObjectId, ref: 'subCategory', required: false },
    occasionType: { type: String, required: false },
    color: { type: String, required: false },
    productSize: { type: String, required: false },
    price: { type: Number, required: false },
    discount: { type: Number, required: false },
    mainImage: { type: String, required: false },
    subImage: { type: String, required: false }
})

module.exports = mongoose.model('products', productSchema)