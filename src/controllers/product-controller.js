const express = require('express');
const router = express.Router()
const products = require('../persistence/product-collection')


router.get('/',testFunc)

async function testFunc(req,res){
    try{
        const produc = await products.find();
        res.json(produc)


    }
    catch(err){
        res.send('Error', err)
    }
    
}

module.exports = router