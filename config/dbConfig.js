const {Sequelize,DataTypes} = require('sequelize');

const dbConnection  = new Sequelize(
    process.env.DB,
    process.env.USER,
    process.env.DB_PASS,{
        HOST: process.env.HOST,
        dialect: 'mysql',
        operatorAliases: false,
       
    }
)

dbConnection.authenticate().then(()=>{
    console.log("Connect to database");
}).catch((err)=>{
    console.log("error: " + err)
})



dbConnection.sync({ force : false }).then(()=>{
    console.log("re-sync complete")
})


module.exports = dbConnection