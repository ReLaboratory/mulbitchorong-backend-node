const express = require('express');
const router = express.Router();


router.post('/', (req, res, next) => {
   res.send({"index" : "this page is for index"})
    
});

module.exports = router;