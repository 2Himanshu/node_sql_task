
const dbConnection = require('../config/dbConfig.js')
const {DataTypes} = require('sequelize')
const Order =  dbConnection.define('order',{
            orderedBy: {
                type: DataTypes.STRING,
                allowNull: false
            },
            productName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            price: {
                type: DataTypes.INTEGER
            },
            address: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            quantity: {
                type: DataTypes.INTEGER,
            },
            isDelivered: {
                type: DataTypes.BOOLEAN
            }
})

module.exports = Order