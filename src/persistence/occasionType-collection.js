const mongoose =  require('mongoose')

const occasionTypeSchema = new mongoose.Schema({
    occasionType:{type: String, required: true}
})

module.exports = mongoose.model('occasionType',occasionTypeSchema)