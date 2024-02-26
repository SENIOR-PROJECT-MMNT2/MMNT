const {wishlist}=require("../../database/Models/WishList")
const {Product}=require("../../database/Models/Product")
const { assert } = require("console")
const{Image}=require("../../database/Models/Image")


// const getAll = function (req, res) {
//   const get = Product.findAll({
//     include: [{ model: wishlist }],
//     where: { productId: req.params.id}
//   })
//   .then((result)=>{
//     res.status(201).send(get)
//   })
//   .catch((error)=>{
//     res.send(error)
//   })
//   }
const getAll = async (req, res)=> {
try{
 const wish= await wishlist.findAll({
    where: { userId: req.params.id },
    include:[{
    model:Product,
    required:true,
    include:[{
      model:Image,
      required:true
    }]
    }]
  })
  }
  const getone = function (req, res) {
    const get= wishlist.findAll({
      where:{productId:req.params.prodid,
      userId: req.params.userid}
    }).then((result)=>{
      res.status(201).send(result)
    })
    .catch((error)=>{
      res.send(error)
    })
  res.send(wish)
}
 catch(err){
  console.log(err)
 }
 
  
};
 
const add = function (req, res) {
  const add= wishlist.create(req.body).then((result)=>{
    res.json(result)
  })
  .catch((error)=>{
    res.send(error)
  })
  }
  const delhome = function (req, res) {
    const del= wishlist.destroy({where:
      {userId:req.params.userid,
        productId:req.params.productid
  
    }}).then((result)=>{
      res.json(result)
    })
    .catch((error)=>{
      res.send(error)
    })
    }

const del = function (req, res) {
  const del= wishlist.destroy({where:
    {idWishlist:req.params.idWishlist

  }}).then((result)=>{
    res.json(result)
  })
  .catch((error)=>{
    res.send(error)
  })
  }





  module.exports={getAll,add,del,getone,delhome}