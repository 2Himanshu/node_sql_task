module.exports =(sequelize,DataTypes)=> {

        const Order =  sequelize.define('order',{
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
    return Order
}