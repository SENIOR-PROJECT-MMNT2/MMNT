const {wishlist}=require("../../database/Models/WishList")
const {Product}=require("../../database/Models/Product")



const getAll = function (req, res) {
  const get = Product.findAll({
    include: [{ model: wishlist }],
    where: { productId: req.params.productId }
  })
  .then((result)=>{
    res.status(201).send(result)
  })
  .catch((error)=>{
    res.send(error)
  })
  }
 
const add = function (req, res) {
  const add= wishlist.create(req.body).then((result)=>{
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





  module.exports={getAll,add,del}