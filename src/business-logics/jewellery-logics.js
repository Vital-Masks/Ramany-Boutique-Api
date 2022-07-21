const jewelleryCollection = require('../persistence/jewellery-collection')

var jewelleryLogics = {
     getAlljewellerys: async function() {
        return new Promise((resolve, reject) => {
            return jewelleryCollection.find()
            .then((s) => {
                resolve(s)                    
                })              
        })
    }

};

module.exports = jewelleryLogics