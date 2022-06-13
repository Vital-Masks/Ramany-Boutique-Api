const productCollection = require('../persistence/product-collection')

var productLogics = {
     getAllProducts: async function() {
        return new Promise((resolve, reject) => {
            return productCollection.find()
            .then((s) => {
                resolve(s)                    
                })              
        })
    }

};

module.exports = productLogics