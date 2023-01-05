const customerCollection = require('../persistence/customer-collection')
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const customerLogics = require('../business-logics/customer-logics')


var loginLogics = {

    authenticateCustomer: async function (email, password){
        return customerLogics.findCustomerByEmail(email).then(async result=>{
            console.log("paass",result[0].password)
            if(result[0].password && result[0].password != ''){
                const validPassword = await bcrypt.compare(password, result[0].password);
                console.log(validPassword)
                if(validPassword){
                    return result
                }
                else {
                    return 'Wrong Password'
                }
            }
            else{
              return 'Wrong Password'
            }

        })
    },

    authenticateAdmin: async function (username, password){
        if(username === 'Kavi15' && password === '150102'){
            const token = await this.generateToken();
            return token
        }
        
    },

    generateToken({ stringBase = 'base64', byteLength = 48 } = {}) {
        return new Promise((resolve, reject) => {
          crypto.randomBytes(byteLength, (err, buffer) => {
            if (err) {
              reject(err);
            } else {
              resolve(buffer.toString(stringBase));
            }
          });
        });
      }




   
}


module.exports = loginLogics
