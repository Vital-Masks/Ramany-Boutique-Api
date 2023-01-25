const mongoose =  require('mongoose')

const imageSchema = new mongoose.Schema({
    bannerImg:{ type: Array, required: false },
    occasionTypeImg: { type: Object, required: false },
    jewelleryCategoryImg: { type: Object, required: false },
    aboutUsImg: { type: Object, required: false },
    whoWeAreImg: { type: Object, required: false }
})

module.exports = mongoose.model('images',imageSchema)