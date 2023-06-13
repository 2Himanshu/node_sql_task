const models = require('../utils/allModel.js');

exports.ModelRelationShip =()=>{

        models.allModels.productModel.hasMany(models.allModels.orderModel,{
            foreignKey: "product_id",
            as: "order",
        })

        models.allModels.orderModel.belongsTo(models.allModels.productModel,{
            foreignKey: "product_id",
            as: "product",
        })

}