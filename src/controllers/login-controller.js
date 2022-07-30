const express = require('express');
const router = express.Router()


router.post('/', authenticateUser)

function authenticateUser(req,res,next){
    res.send({
        token: 'test123'
      });
}

module.exports = router