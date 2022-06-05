const mongoose =  require('mongoose')

const subCategorySchema = new mongoose.Schema({
    subCatogoryName:{type: String, required: true}
})

module.exports = mongoose.model('subCategory',subCategorySchema)