const mongoose =  require('mongoose')

const mainCategorySchema = new mongoose.Schema({
    mainCategoryName:{type: String, required: true}
})

module.exports = mongoose.model('mainCategory',mainCategorySchema)