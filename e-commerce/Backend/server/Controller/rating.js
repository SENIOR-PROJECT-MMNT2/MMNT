
const {rating}=require("../../database/Models/rating")

const Add = async function(req, res) {
    try {
        const existingRating = await rating.findOne({
            where: {
                prodId: req.body.prodId,
                userId: req.body.userId
            }
        });

        if (!existingRating) {
            await rating.create({
                userId: req.body.userId,
                prodId: req.body.prodId,
                rating: req.body.rating
            });
            return res.status(201).send({
                userId: req.body.userId,
                prodId: req.body.prodId,
                rating: req.body.rating
            });
        } else {
            await rating.update(
                { rating: req.body.rating },
                {
                    where: {
                        prodId: req.body.prodId,
                        userId: req.body.userId
                    }
                }
            );
            return res.status(200).json("updated");
        }
    } catch (error) {
        return res.status(500).json(error);
    }
}
    const getrate = async (req, res) => {

        try {
            const ratings = await rating.findAll({
                where: { prodId: req.params.prodid }
            });
    
            if (ratings.length > 0) {
                const totalRating = ratings.reduce((acc, curr) => acc + curr.rating, 0);
                const avgRating = totalRating / ratings.length;
    
                return res.status(200).json(avgRating);
            } else {
                return res.status(200).json(0);
            }
        } catch (err) {
            return res.status(500).json(err);
        }
    };




  module.exports={Add,getrate}