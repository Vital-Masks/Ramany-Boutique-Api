const { ObjectId } = require('mongodb');
const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    productCode: { type: String, required: true },
    gender: { type: String, required: true },
    productType: { type: String, required: false },
    occasionTypeId: { type: mongoose.Schema.ObjectId, ref: 'categories', required: false, autopopulate: true },  
    clothingCategoryId: { type: mongoose.Schema.ObjectId, ref: 'categories', required: false, autopopulate: true },
    sizeAndCount: { type: Array, required: false },
    price: { type: Number, required: false },
    discount: { type: Number, required: false },
    mainImage: { type: String, required: false },
    subImage: { type: String, required: false },    
})
productSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('products', productSchema)