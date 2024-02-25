const router = require('express').Router();
const {Add,getrate} = require("../Controller/rating");

// Add a rating
router.post('/add', Add);

// Get a rating by userId and productId
router.get('/getone/:prodid', getrate);

module.exports = router;
