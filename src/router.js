const express = require('express');
const router = express.Router()
const productController = require('./controllers/product-controller')
const orderController = require('./controllers/order-controller')
const customerController = require('./controllers/customer-controller')
const categoryController = require('./controllers/category-controller')


router.use('/products', productController)
router.use('/orders', orderController)
router.use('/customers', customerController)
router.use('/category', categoryController)


module.exports = router