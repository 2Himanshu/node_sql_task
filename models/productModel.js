
const dbConnection = require('../config/dbConfig.js')
const {DataTypes} = require('sequelize')

    const Product  = dbConnection.define('product',{
        productName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
        },
        description:{
            type: DataTypes.TEXT
        },
        isAvailable:{
            type: DataTypes.BOOLEAN
        }
    })
    
    
module.exports = Product
