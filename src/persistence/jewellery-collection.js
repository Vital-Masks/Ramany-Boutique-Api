const { ObjectId } = require('mongodb');
const mongoose = require('mongoose')


const jewellerySchema = new mongoose.Schema({
    jewelleryName: { type: String, required: true },
    jewelleryCode: { type: String, required: true },
    gender: { type: String, required: true },
    occasionTypeId: { type: Array, ref: 'categories', required: false, autopopulate: true },  
    jewelleryingCategoryId: { type: mongoose.Schema.ObjectId, ref: 'categories', required: false, autopopulate: true },
    sizeAndCount: { type: Array, required: false },
    price: { type: Number, required: false },
    discount: { type: Number, required: false },
    description: { type: String, required: false },
    inclusions: { type: String, required: false },
    gemStones: { type: String, required: false },
    metalAndFinish: { type: String, required: false },
    detailing: { type: String, required: false },
    style: { type: String, required: false },  
    customization: { type: String, required: false },
    mainImage: { type: String, required: false },
    subImage: { type: String, required: false },    
})
jewellerySchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('jewellerys', jewellerySchema)