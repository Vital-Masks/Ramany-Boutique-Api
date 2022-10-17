const customerCollection = require('../persistence/customer-collection')
const bcrypt = require('bcrypt');

const saltRounds = 10;

var customerLogics = {
    createCustomer: async function (customerData) {

        return customerCollection.find().then(async customers => {
            let found = customers.some(el => el.email === customerData.email)

            if (found === false) {
                if (customerData.password) {
                    customerData.password = await this.createHashPasword(customerData.password)
                }
                const customer = new customerCollection(customerData)

                return customer.save().then((result) => {
                    return result
                })

            }
        })
    },

    updateCustomer: async function (customerId, customerObject){
        customerObject.password = await this.createHashPasword(customerObject.password)
        return customerCollection.findByIdAndUpdate(customerId, customerObject,{new: true}).then((result)=>{
            console.log("result", result)
            return result
            // res.status(200).send(result)
        })
    },

    createHashPasword: async function (textPassword) {
        const hashedPassword = await bcrypt.hash(textPassword, saltRounds)
        return hashedPassword

    },

    findCustomerByEmail: function (email) {
        return customerCollection.find({ email: email }).then(result => {
            return result
        })
    }
}


module.exports = customerLogics