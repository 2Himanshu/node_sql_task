const Order = require('../models/orderModel.js')


// adding order
const addOrder = async(req,res)=>{
    
        let orderInfo = {
            orderedBy: req.body.orderedBy,
            address: req.body.address,
            productName: req.body.productName,
            price: req.body.price,
            product_id: req.body.product_id,
            quantity: req.body.quantity,
            isDelivered: req.body.isDelivered ? req.body.isDelivered : false,
        }

        if(orderInfo.orderedBy == "")
            return res.status(200).json({msg : "customer name is missing"})
        if(orderInfo.address=="")
            return res.status(404).json({msg : "adress is missing"})
        if(!orderInfo.quantity)
            return res.status(404).json({msg : "quantity is missing"})
        if(orderInfo.product_id==null)
            return res.status(404).json({msg : "product id is missing"});
       
        let order = await Order.create(orderInfo)
        if(!order)
            return res.status(404).json({msg : "SuccessFull Inserted",prod : order})
            res.status(200).json(order)

}


// gets all order
const getAllOrders= async(req,res)=>{
    let order  = await Order.findAll({})
    if(!order)
        return res.status(404).json({msg : "Order List is empty"}) 
    return res.status(200).send(order)
}

// gets all order by id

const getOrderById= async(req,res)=>{
    let id = req.params.id
    try {
     
        let order  = await Order.findOne({
            where: {id: id}
        })
        if(!order)
            return res.status(404).json({msg : "Order not found"}) 
        return res.status(200).send(order)
        
    } catch (error) {
        res.status(404).json({msg : "an error occurred"})
    }
    
}

module.exports = {
    addOrder,
    getAllOrders,
    getOrderById
}