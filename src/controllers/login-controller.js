const express = require('express');
const loginLogics = require('../business-logics/login-logics');

const router = express.Router()


router.post('/admin/:username', authenticateAdmin)
router.get('/customer/:email', authenticateCustomer)

function authenticateAdmin(req,res,next){
  const {params:{ username }} = req
  const {query:{ password }} = req.body
  
  return loginLogics.authenticateAdmin(username,password).then(result=>{
    if(result ){
      res.send({
        token: result
      });
    }
    else{
      res.send({
        status: "Incorrect Username or Password"
      });
    }
  })
    
}

function authenticateCustomer(req,res,next){
  const {params:{ email }} = req
  const {query:{ password }} = req
  return loginLogics.authenticateCustomer(email,password).then((result) => {
    console.log("xcvxc",result)
    if(result === "Wrong Password"){
      res.status(400).send({"status":"Authentication Failed" , "Details":"Password is Incorrect"});
    }
    else{
      res.send({"status":"Authenticated" ,"customerDetails":result});
    }
    next();
}).catch((err) => {
    return next(err)
})

}

module.exports = router