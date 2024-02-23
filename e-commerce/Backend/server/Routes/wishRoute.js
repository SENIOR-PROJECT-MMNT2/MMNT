const wishrouter =  require('express').Router();
const {getAll,add ,del}=require('../Controller/wishList')
const {check}= require('../Controller/authorization')


wishrouter.get('/getall',getAll)
wishrouter.post('/add',add)
wishrouter.delete('/delete/:idWishlist',check,del)

module.exports= wishrouter;