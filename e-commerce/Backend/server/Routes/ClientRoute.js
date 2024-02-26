const clientRouter = require('express').Router();
const {updateClient,getClient,addClient,getSome,getOneClient,deleteClient,updateUserRole} = require('../Controller/Client');
const {check}= require('../Controller/authorization')

clientRouter.put('/update/:userId',updateClient)
clientRouter.put('/updateRole/:userId',updateUserRole)
clientRouter.get("/getAll",check,getClient)
clientRouter.get("/getAlle",getClient)
clientRouter.get("/getSome/:role",getSome)
clientRouter.get("/get/:userId",getOneClient)
clientRouter.post("/addClient",addClient)
clientRouter.delete("/delete/:userId",deleteClient)
module.exports=clientRouter