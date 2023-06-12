module.exports = (sequelize,DataTypes) => {

    const Product  = sequelize.define('product',{
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
    return Product
}