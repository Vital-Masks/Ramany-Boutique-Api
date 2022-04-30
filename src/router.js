const express = require('express');
const router = express.Router()
const productController = require('./controllers/product-controller')
const orderController = require('./controllers/order-controller')
const customerController = require('./controllers/customer-controller')


router.use('/products', productController)
router.use('/orders', orderController)
router.use('/customers', customerController)



module.exports = router