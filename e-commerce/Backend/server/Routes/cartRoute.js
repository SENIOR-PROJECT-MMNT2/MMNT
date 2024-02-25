const cartRouter = require('express').Router()
const {getAll, add ,del,getProductincart} = require ('../Controller/cart')

cartRouter.get('/getAll',getAll)
cartRouter.post('/addOne',add)
cartRouter.delete('/delete/:idCart',del)
cartRouter.get('/getpro/:id',getProductincart)

module.exports= cartRouter