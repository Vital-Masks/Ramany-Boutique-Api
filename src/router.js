const express = require('express');
const router = express.Router()
const clothController = require('./controllers/cloth-controller')
const jewelleryController = require('./controllers/jewellery-controller')
const orderController = require('./controllers/order-controller')
const customerController = require('./controllers/customer-controller')
const categoryController = require('./controllers/category-controller')
const loginController =  require('./controllers/login-controller')

router.use('/login', loginController)
router.use('/cloths', clothController)
router.use('/jewellerys', jewelleryController)
router.use('/orders', orderController)
router.use('/customers', customerController)
router.use('/category', categoryController)


module.exports = router