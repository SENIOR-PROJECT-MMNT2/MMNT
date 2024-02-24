const {wishlist}=require("../../database/Models/WishList")
const {Product}=require("../../database/Models/Product")



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
const getAll = function (req, res) {
  wishlist.findAll({
    where: { userId: req.params.id }
  })
  .then(items => {
    const productPromises = items.map(item => {
      const prodId = item.productId;
      return Product.findAll({ where: { prodId: prodId } });
    });
    return Promise.all(productPromises);
  })
  .then(products => {
    res.status(201).send(products);
  })
  .catch(error => {
    res.status(500).send(error);
  });
};

 
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