const connection = require('../../database/index')
const { Sequelize, DataTypes } = require("sequelize")

const RatingSchema = {
    idRating : {
         type : DataTypes.INTEGER,
         autoIncrement : true,
         primaryKey : true ,
         allowNull: false
    },
  
   rating : {
      type : DataTypes.INTEGER,
      allowNull: false
   }
  }

const rating = connection.define('rating', RatingSchema,{timestamps:false})

// connection.sync({alter: true})
module.exports= {rating}