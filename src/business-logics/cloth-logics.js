const clothCollection = require('../persistence/cloth-collection')

var clothLogics = {
     getAllcloths: async function() {
        return new Promise((resolve, reject) => {
            return clothCollection.find()
            .then((s) => {
                resolve(s)                    
                })              
        })
    }

};

module.exports = clothLogics