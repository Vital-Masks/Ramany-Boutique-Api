const mongoose =  require('mongoose')

const productScheme = new mongoose.Schema({
    productName:{type: String, required: true},
    productCode:{type: String, required: true}

})

module.exports = mongoose.model('products',productScheme)