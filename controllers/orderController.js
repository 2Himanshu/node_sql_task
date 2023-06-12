const db = require('../models')

const Order =  db.orders


// adding order
const addOrder = async(req,res)=>{
    
        let info = {
            orderedBy: req.body.orderedBy,
            address: req.body.address,
            productName: req.body.productName,
            price: req.body.price,
            quantity: req.body.quantity,
            isDelivered: req.body.isDelivered ? req.body.isDelivered : false,
        }

        if(info.orderedBy == "")
            return res.status(200).json({msg : "customer name is missing"})
        if(info.address=="")
            return res.status(404).json({msg : "adress is missing"})
        if(!info.quantity)
            return res.status(404).json({msg : "quantity is missing"})
       
        let order = await Order.create(info)
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