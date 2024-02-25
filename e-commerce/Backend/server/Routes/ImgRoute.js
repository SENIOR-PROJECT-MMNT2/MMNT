const ImageRouter = require('express').Router();
const {getImage,getOneImage,deleteImage,addImage,UpdateImage,getImgProd} = require('../Controller/Img');

ImageRouter.get('/getAll',getImage)
ImageRouter.get('/getOne/:imgId',getOneImage)
ImageRouter.delete('/delete/:imgId',deleteImage)
ImageRouter.post('/add/:productProdId',addImage)
ImageRouter.get('/get/:productProdId',getImgProd)
// ImageRouter.put('/update/:catId',UpdateImage)

module.exports=ImageRouter