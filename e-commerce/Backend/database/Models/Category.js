const connection = require('../index')
const { Sequelize, DataTypes } = require("sequelize");
const {Product} = require('./Product')
const categorySchema = {
catId:{
    type:DataTypes.INTEGER,
    autoIncrement: true,
        primaryKey: true
},
content:{
    type:DataTypes.STRING,
    allowNull:false
}
}


const Category= connection.define("category",categorySchema,{timestamps:false})
Category.hasMany(Product)
// connection.sync({alter: true})


module.exports = {
    Category
}