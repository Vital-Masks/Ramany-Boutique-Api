const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    // firstName: { type: String, required: true },
    // lastName: { type: String, required: true },
    // email: { type: String, required: true },
    // address: { type: String, required: true },
    // phone: { type: String, required: true },
    // zipcode: { type: String, required: true },
    // paymentMethod: { type: String, required: true },
    
    customerId: { type: mongoose.Schema.ObjectId, ref: 'customer', required: false ,autopopulate: true},
    totalCost: { type: Number, required: true },
    status: { type: String, required: true },
    clothDetails: [{
        productName: { type: String, required: true },
        productId: { type: mongoose.Schema.ObjectId, ref: 'cloths', required: false, autopopulate: {
            select: '-mainImage -subImage' // remove listed fields from selection
          } },
        sizeAndCount:[{
            quantity: { type: Number, required: true },
            size: { type: String, required: true }
            }],
        netPrice: { type: Number, required: true }
    }],
    jewelleryDetails: [{
        productName: { type: String, required: true },
        productId: { type: mongoose.Schema.ObjectId, ref: 'jewellerys', required: false, autopopulate: {
            select: '-mainImage -subImage' // remove listed fields from selection
          } },
        quantity: { type: Number, required: true },         
        netPrice: { type: Number, required: true }
    }]
})
orderSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('orders', orderSchema)


// [{
//     productName: { type: String, required: true },
//     productId: { type: mongoose.Schema.ObjectId, ref: 'cloths', required: false, autopopulate: true },
//     quantity: { type: Number, required: true },
//     netPrice: { type: Number, required: true }
// }],