const jewelleryCollection = require('../persistence/jewellery-collection')
const clothCollection = require('../persistence/cloth-collection')
const orderCollection = require('../persistence/order-collection')

var orderLogics = {
  //  getAlljewellerys: async function() {
  //     return new Promise((resolve, reject) => {
  //         return jewelleryCollection.find()
  //         .then((s) => {
  //             resolve(s)
  //             })
  //     })
  // }

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


        }).catch((err) => {

        })

    },
};

module.exports = orderLogics