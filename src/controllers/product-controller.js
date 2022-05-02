const express = require('express');
const router = express.Router()
const productCollection = require('../persistence/product-collection')


router.post('/', createProduct)
router.get('/', getAllProducts)
router.get('/:productId', getProductById)
router.delete('/:productId', deleteProduct)



function createProduct(req,res,next){
    const { body } = req
    
    const product = new productCollection(body)

    return product.save().then((result) => {
        res.send({"status":"Product Saved Successfully"});
        next();
    }).catch((err) => {
        return next(err)
    })
}

function getAllProducts(req, res, next){
    return productCollection.find().then((result) => {
        res.send(result);
        next();
    }).catch((err) => {
        return next(err)
    })
}

function getProductById(req, res, next){
    const {params:{ productId }} = req
    return productCollection.findById(productId).then((result) => {
        res.send(result);
        next();
    }).catch((err) => {
        return next(err)
    })
}

function deleteProduct(req, res, next){
    const {params:{ productId }} = req
    return productCollection.remove({_id:productId}).then((result) => {
        res.send({"status":"Product Deleted Successfully"});
        next();
    }).catch((err) => {
        return next(err)
    })
}


module.exports = router