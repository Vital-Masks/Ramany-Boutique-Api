const express = require('express');
const router = express.Router()
const customerCollection = require('../persistence/customer-collection')
const customerLogics = require('../business-logics/customer-logics')


router.post('/', createCustomer)
router.get('/', getAllCustomers)
router.get('/:customerId', getCustomerById)
router.delete('/:customerId', deleteCustomer)



function createCustomer(req,res,next){
    const { body } = req

    return customerLogics.createCustomer(body).then((result) => {
        if(!result){
            res.status(400).send('Email already exists');
        }
        else{
            res.send({"status":"Customer Saved Successfully", "customerDetail":result});
        }
        
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