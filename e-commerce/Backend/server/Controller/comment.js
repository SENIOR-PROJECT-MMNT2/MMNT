
const {comment}=require("../../database/Models/comment")
const {User}=require("../../database/Models/User")
const Add = async function(req, res) {
    try{
       await comment.create(req.body).then((res)=>{
        res.status(201).json(res)
       }).catch((err)=>{
        console.log(err);
       })
    }catch(err){
        return res.status(500).json(err);
    }
}
const getcomm = async (req, res) => {
    try {
        const comments = await comment.findAll({
            where: { prodId: req.params.prodid },
            include: [
                { model: User }
            ]
        });
        res.status(200).json(comments);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
}





  module.exports={Add,getcomm}