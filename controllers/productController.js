const db = require('../models');

// create main model

const Product = db.products

// adding products

const createProduct = async(req,res)=>{

    let info = {
        productName: req.body.productName,
        price: req.body.price,
        description: req.body.description,
        isAvailable: req.body.isAvailable ? req.body.isAvailable : false,
    }


    if(info.productName == "")
        return res.status(404).send({msg: "name is empty."})
    if(info.price == null)
        return res.status(404).send({msg: "price is empty."})
    if(info.description == "")
        return res.status(404).send({msg: "description is empty."})
    if(info.isAvailable == null)
        return res.status(404).send({msg: "available  is empty."})    

    let prod = await Product.create(info);
    res.status(200).send(prod);

}

// getting all products

const getAllProduct = async(req,res) => {

    try {
    let products = await Product.findAll({})
    if(products.length <=0)
        return res.status(200).send({msg: "Product is empty "});
    else
        return res.status(200).send(products) 
    } catch (error) {
       res.status(500).send({ error: error,msg: 'error while retrieving all products'}) 
    }
    
}

// getting products by id

const getProductByID = async(req,res) => {
    let id = req.params.id
    let products = await Product.findOne({where: {id: id}})
    if(!products)
        return res.status(404).send({msg: 'Product not found'})
    return res.status(200).send(products)
}

// deleting products by id

const delProduct = async(req,res) => {
    let id = req.params.id;
    const products = await Product.destroy({where: {id: id}});
    if(products)
        res.status(200).send({msg: "deleted products"})
    else 
    res.status(404).send({msg: 'product not found'});
}

// updating product by id
const updateProduct = async(req,res) => {
    let info = req.body
    let id = req.params.id
    let prodID = await Product.findByPk(id)
        if(!prodID)
            return res.status(404).send({msg: "product not found"});
    let products = await Product.update(info,{
        where: {id: id}
    })
    if(!products)
        return res.status(404).send({msg: "product not found"})
    else  
        return res.status(200).send({msg: "product successfully updated"})
}

module.exports = {
    createProduct,
    getAllProduct,
    getProductByID,
    delProduct,
    updateProduct
}