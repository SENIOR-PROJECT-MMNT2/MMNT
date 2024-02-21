const connection = require('../../database/index')
const { Sequelize, DataTypes } = require("sequelize")

const CartSchema = {
    idCart : {
         type : DataTypes.INTEGER,
         autoIncrement : true,
         primaryKey : true ,
         allowNull: false
    },
  
   CartQuantity : {
      type : DataTypes.INTEGER,
      allowNull: false
   }
   
  }

const cart = connection.define('cart', CartSchema,{timestamps:false})

module.exports= {cart}