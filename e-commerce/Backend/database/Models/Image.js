const connection = require('../index')
const { Sequelize, DataTypes } = require("sequelize");

const imageSchema = {
imgId:{
    type:DataTypes.INTEGER,
    autoIncrement: true,
        primaryKey: true
},
img:{
    type:DataTypes.STRING,
    allowNull:false
}
}


const Image= connection.define("image",imageSchema,{timestamps:false})
// connection.sync({alter: true})


module.exports = {
    Image
}