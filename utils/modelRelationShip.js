const models = require('../utils/allModel.js');

exports.ModelRelationShip =()=>{

        models.allModels.productModel.hasMany(models.allModels.orderModel)

        models.allModels.orderModel.belongsTo(models.allModels.productModel)

}