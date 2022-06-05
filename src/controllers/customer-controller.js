const express = require('express');
const router = express.Router()
const customerCollection = require('../persistence/customer-collection')


router.post('/', createCustomer)
router.get('/', getAllCustomers)
router.get('/:customerId', getCustomerById)
router.delete('/:customerId', deleteCustomer)



function createCustomer(req,res,next){
    const { body } = req
    
    const customer = new customerCollection(body)

    return customer.save().then((result) => {
        res.send({"status":"Customer Saved Successfully"});
        next();
    }).catch((err) => {
        return next(err)
    })
}

function getAllCustomers(req, res, next){
    return customerCollection.find().then((result) => {
        res.send(result);
        next();
    }).catch((err) => {
        return next(err)
    })
}

function getCustomerById(req, res, next){
    const {params:{ customerId }} = req
    return customerCollection.findById(customerId).then((result) => {
        res.send(result);
        next();
    }).catch((err) => {
        return next(err)
    })
}

function deleteCustomer(req, res, next){
    const {params:{ customerId }} = req
    return customerCollection.remove({_id:customerId}).then((result) => {
        res.send({"status":"Customer Deleted Successfully"});
        next();
    }).catch((err) => {
        return next(err)
    })
}


module.exports = router