const { ObjectId } = require('mongodb');
const mongoose = require('mongoose')


const clothSchema = new mongoose.Schema({
    clothName: { type: String, required: true },
    clothCode: { type: String, required: true },
    gender: { type: String, required: true },
    occasionTypeId: { type: Array, ref: 'categories', required: false, autopopulate: true },  
    clothingCategoryId: { type: mongoose.Schema.ObjectId, ref: 'categories', required: false, autopopulate: true },
    sizeAndCount: { type: Array, required: false },
    price: { type: Number, required: false },
    discount: { type: Number, required: false },
    description: { type: String, required: false },
    fabric: { type: String, required: false },
    features: { type: String, required: false },
    measurements: { type: String, required: false },
    style: { type: String, required: false },
    washInstructions: { type: String, required: false },
    customAltrations: { type: String, required: false },
    mainImage: { type: Object, required: false },
    subImage: { type: Object, required: false },    
})
clothSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('cloths', clothSchema)