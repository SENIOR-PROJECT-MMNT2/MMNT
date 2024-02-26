const router = require('express').Router();
const {Add,getcomm} = require("../Controller/comment");

// Add a rating
router.post('/add', Add);

// Get a rating by userId and productId
router.get('/getall/:prodid', getcomm);

module.exports = router;
