const express = require('express');
const router = express.Router()
const orderCollection = require('../persistence/order-collection')
const orderLogics = require('../business-logics/order-logics')
const clothCollection = require('../persistence/cloth-collection')

router.post('/', createOrder)
router.put('/updateStatus/:orderId',changeOrderStatus)
router.get('/', getAllOrders)
router.get('/:orderId', getOrderById)
router.delete('/:orderId', deleteOrder)
router.get('/customer/:customerId', getOrderByCustomerId)



function  createOrder(req,res,next){
    const { body } = req
    return orderLogics.createOrder(body).then((result) => {
        res.send({"status":"Order Saved Successfully"});
        next();
    }).catch((err) => {
        return next(err)
    })
}

function getOrderByCustomerId(req, res, next){    
    const {params:{ customerId }} = req
    return orderCollection.find({customerId: customerId}).then((result) => {
        res.send(result);
    }).catch((err) => {
        return next(err)
    })
}

function getAllOrders(req, res, next){
    return orderCollection.find().sort({created_at:-1}).then((result) => {
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

function changeOrderStatus(req, res, next){
    const { params:{ orderId }} = req
    const { query:{ status }} = req.body
    console.log("req", req)
    return orderLogics.changeOrderStatus(orderId, status).then((result)=>{
        res.send({"Status":"Success"})
    }).catch((err) => {
        return next(err)
    })
}


module.exports = router