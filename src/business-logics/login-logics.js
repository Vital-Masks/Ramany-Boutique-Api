const customerCollection = require('../persistence/customer-collection')
const bcrypt = require('bcrypt');
const customerLogics = require('../business-logics/customer-logics')


var loginLogics = {

    authenticateCustomer: async function (email, password){
        return customerLogics.findCustomerByEmail(email).then(async result=>{
            // console.log(result[0].password)
            if(result[0].password){
                const validPassword = await bcrypt.compare(password, result[0].password);
                console.log(validPassword)
                if(validPassword){
                    return result
                }
                else {
                    return 'Wrong Password'
                }
            }

        })
    }


   
}


module.exports = loginLogics
