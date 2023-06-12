const orderController = require('../controllers/orderController.js')
const express = require('express')
const router = express.Router();



// order routes

router.post('/addOrder', orderController.addOrder)
router.get('/allOrders', orderController.getAllOrders)
router.get('/getOrderById/:id', orderController.getOrderById)

module.exports = router;