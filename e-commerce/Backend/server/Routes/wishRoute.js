const wishrouter =  require('express').Router();
const {getAll,add ,del,getone,delhome}=require('../Controller/wishList')



wishrouter.get('/getall',getAll)
wishrouter.get('/getone/:userid/:prodid',getone)
wishrouter.post('/add',add)
wishrouter.delete('/delete/:idWishlist',del)
wishrouter.delete('/deletehome/:userid/:productid',delhome)
module.exports= wishrouter;