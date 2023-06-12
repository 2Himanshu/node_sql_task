const dbConfig = require('../config/dbConfig.js')

const {Sequelize,DataTypes} = require('sequelize');

const sequelize  = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        HOST: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

sequelize.authenticate().then(()=>{
    console.log("Connect to database");
}).catch((err)=>{
    console.log("error: " + err)
})

const db = {}

db.sequelize = sequelize
db.products = require('./productModel.js')(sequelize,DataTypes)
db.orders = require('./orderModel.js')(sequelize,DataTypes)

db.sequelize.sync({ force : false }).then(()=>{
    console.log("re-sync complete")
})

db.products.hasMany(db.orders,{
    foreignkey: 'productName',
    as: 'order'
})

db.orders.belongsTo(db.products,{
    foreignkey: "productName",
    as: 'product'
})

module.exports = db