const productRouter = require('express').Router();
const {AllPro,AllProSeller,GetOnePro,AddPro,DeletePro,UpdatePro,GetOneByUser, AddProimg ,getProimg ,UpdateRating,updateSellerProd } = require('../Controller/product.js');

productRouter.get('/product',AllPro)
productRouter.get('/product/:prodId',GetOnePro)
productRouter.get('/findproduct/:userUserId',GetOneByUser)
productRouter.get('/findproseller/:',AllProSeller)

productRouter.post('/addproduct',AddPro)
productRouter.post('/productImg',AddProimg)
productRouter.get('/productImg/:productProdId',getProimg)



productRouter.put('/product/:prodId',UpdatePro)
productRouter.put('/updateRatings/:prodId',UpdateRating)
productRouter.put("/update/:prodId",updateSellerProd)
productRouter.delete('/product/:prodId',DeletePro)

module.exports=productRouter;