const productController = require('../controllers/productController.js')
const reviewController = require('../controllers/orderController.js')
const express = require('express')
const router = express.Router();

// product routes
router.post('/addProduct',productController.createProduct)
router.get('/getAllProducts',productController.getAllProduct)
router.get('/getProductByID/:id',productController.getProductByID)
router.delete('/delProduct/:id',productController.delProduct)
router.patch('/updateProduct/:id',productController.updateProduct)



module.exports = router;