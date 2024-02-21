const connection = require('../../database/index')
const { Sequelize, DataTypes } = require("sequelize")



const WishlistSchema={
    idWishlist : {
     type : DataTypes.INTEGER,
    autoIncrement : true,
primaryKey : true,
allowNull: false
  },
}


const wishlist=connection.define('wishlist',WishlistSchema,{timestamps:false})
// connection.sync({alter: true})

module.exports = {wishlist}