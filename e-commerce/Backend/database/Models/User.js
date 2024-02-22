const connection = require('../index')
const { DataTypes} = require('sequelize')
const {Product} = require('./Product')
const {cart} = require ('./cart')
const {wishlist} = require('./WishList')
const {comment} = require ('./comment')
const {rating}= require('./rating')
const {payment}=require ('./payment')

const User = connection.define("user", {

    userId:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    role:{
        type:DataTypes.STRING,
        allowNull:false
    },
    firstName:{
        type:DataTypes.STRING,
        allowNull:true
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:true
    },
    age:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    email: {
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    image:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{timestamps:false})


User.hasMany(Product)


wishlist.belongsTo(User,{foreignKey:'userId'})
wishlist.belongsTo(Product,{foreignKey:'productId'})

cart.belongsTo(User,{foreignKey:'userId'});
cart.belongsTo(Product,{foreignKey:'productId'})

comment.belongsTo(Product, { foreignKey: 'prodId' })
comment.belongsTo(User, { foreignKey: 'userId' })
rating.belongsTo(Product, { foreignKey: 'prodId' })
rating.belongsTo(User, { foreignKey: 'userId' })
payment.belongsTo(User, { foreignKey: 'userId' })
User.sync();







module.exports={
   User
}