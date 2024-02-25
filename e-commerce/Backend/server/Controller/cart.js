const {cart} = require('../../database/Models/cart')
const {Product} = require('../../database/Models/Product.js')
const {Image} = require('../../database/Models/Image')
const getAll = function (req, res) {
    const user=  cart.findAll({}).then((result)=>{
      res.status(201).send(result)
    })
    .catch((error)=>{
      res.send(error)
    })
    }
    
    // const getAllByUserId= function (req, res) {
    //       const getone= wishlist.findAll({where:{userId:req.params.id}}).then((result)=>{
    //         res.json(result)
    //       })
    //       .catch((error)=>{
    //         res.send(error)
    //       })
    //       }
  
  const add = function (req, res) {
    const user=  cart.create(req.body).then((result)=>{
      res.json(user)
    })
    .catch((error)=>{
      res.send(error)
    })
    }
  
  const del = function (req, res) {
    const user=  cart.destroy({where:{idCart:req.params.idCart}}).then((result)=>{
      res.json(user)
    })
    .catch((error)=>{
      res.send(error)
    })
    }
  const getProductincart= async (req,res)=>{
const user=req.params.id
      try {
        const productsInCart = await cart.findAll({
          where: { userId:user },
          include: [{
            model: Product,
            required: true,
            include: [{
              model: Image,
              required: true
            }]
          }]
        });
        res.send(productsInCart)
      } catch (error) {
        console.error('Error retrieving products in cart:', error);
      }
    }
  
  
  
  
  
  
    module.exports={getAll, add ,del,getProductincart}