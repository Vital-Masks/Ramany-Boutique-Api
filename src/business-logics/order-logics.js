const jewelleryCollection = require('../persistence/jewellery-collection')
const clothCollection = require('../persistence/cloth-collection')
const orderCollection = require('../persistence/order-collection');
const { response } = require('express');

var orderLogics = {

    createOrder: async function (orderObj) {
        const cloth = new orderCollection(orderObj)
        cloth.save().then((result) => {
            if (orderObj.clothDetails) {
                productDetails = orderObj.clothDetails

                productDetails.forEach(product => {
                    clothCollection.findOne({ _id: product.productId }, function (err, response) {
                        if (err) {
                            console.log("res", response)
                        } else {
                            response.sizeAndCount.map(element => {
                                product.sizeAndCount.forEach(ele => {
                                    if (ele.size === element.size) {
                                        element.count = element.count - ele.quantity
                                    }
                                })
                            })
                            clothCollection.updateOne({ _id: product.productId }, response, function (err, response) {
                                if (err) {
                                    // callback(err);
                                    console.log("res", err)
                                } else {
                                    console.log("res", response)
                                }
                            })
                        }
                    })

                })
            }
            if (orderObj.jewelleryDetails) {
                jewelleryDetails = orderObj.jewelleryDetails
                jewelleryDetails.forEach(jewellery => {
                    jewelleryCollection.updateOne({ _id: jewellery.productId }, { $inc: { quantity: - jewellery.quantity } }, function (err, response) {
                        if (err) {
                            // callback(err);
                            console.log("jewelleryErrorResponse", err)
                        } else {
                            console.log("jewelleryResponse", response)
                        }
                    })

                })

            }


        }).catch((err) => {

        })

    },

    changeOrderStatus: async function(orderId,status){
        return orderCollection.updateOne({ _id: orderId }, { status: status }).then(response=>{
            return response
        })

    }
};

module.exports = orderLogics