const mongoose =  require('mongoose')

const mainCategorySchema = new mongoose.Schema({
    categoryType:{type: String, required: true},
    categoryName:{type: String, required: true}
})

module.exports = mongoose.model('categories',mainCategorySchema)