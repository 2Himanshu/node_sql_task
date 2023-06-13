const orderController = require('../controllers/orderController.js')
const express = require('express')
const router = express.Router();


router.post('/addOrder', orderController.addOrder)
router.get('/getAllOrders', orderController.getAllOrders)
router.get('/getOrderById/:id', orderController.getOrderById)

module.exports = router;