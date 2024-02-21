const connection = require('../../database/index')
const { Sequelize, DataTypes } = require("sequelize")

const PaySchema = {
    idpayment : {
         type : DataTypes.INTEGER,
         autoIncrement : true,
         primaryKey : true ,
         allowNull: false
    },
  }

const payment = connection.define('payment', PaySchema,{timestamps:false})

module.exports= {payment}