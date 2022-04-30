const express = require('express');
const router = express.Router()


router.get('/',testFunc)

function testFunc(req,res){
    return res.send('Its Order')
}

module.exports = router