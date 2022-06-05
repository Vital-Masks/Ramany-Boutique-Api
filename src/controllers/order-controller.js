const express = require('express');
const router = express.Router()
const orderCollection = require('../persistence/order-collection')


router.post('/', createOrder)
router.get('/', getAllOrders)
router.get('/:orderId', getOrderById)
router.delete('/:orderId', deleteOrder)



function createOrder(req,res,next){
    const { body } = req
    
    const order = new orderCollection(body)

    return order.save().then((result) => {
        res.send({"status":"Order Saved Successfully"});
        next();
    }).catch((err) => {
        return next(err)
    })
}

function getAllOrders(req, res, next){
    return orderCollection.find().then((result) => {
        res.send(result);
        next();
    }).catch((err) => {
        return next(err)
    })
}

function getOrderById(req, res, next){
    const {params:{ orderId }} = req
    return orderCollection.findById(orderId).then((result) => {
        res.send(result);
        next();
    }).catch((err) => {
        return next(err)
    })
}

function deleteOrder(req, res, next){
    const {params:{ orderId }} = req
    return orderCollection.remove({_id:orderId}).then((result) => {
        res.send({"status":"Order Deleted Successfully"});
        next();
    }).catch((err) => {
        return next(err)
    })
}


module.exports = router