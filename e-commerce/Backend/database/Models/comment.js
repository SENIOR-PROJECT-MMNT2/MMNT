const connection = require('../../database/index')
const { Sequelize, DataTypes } = require("sequelize")

const CommentSchema = {
    idComment : {
         type : DataTypes.INTEGER,
         autoIncrement : true,
         primaryKey : true ,
         allowNull: false
    },
  
   comment : {
      type : DataTypes.STRING,
      allowNull: false
   },

  }
const comment = connection.define('comment', CommentSchema,{timestamps:false})

// comment.sync({alter: true})

module.exports= {comment}