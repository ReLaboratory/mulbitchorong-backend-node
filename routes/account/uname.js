const express = require('express');
const router = express.Router();
const mongodb = require('mongodb').MongoClient;
const url = require('url');

const mongourl = 'mongodb://localhost:27017/mulbitchorong-backend-node';
 
router.get('/:uname', (req, res, next) => {
    const id = req.params.uname;
    
    
    mongodb.connect(mongourl, (err,db) => {
        if (err) { console.error(err); }

        const cursor = db.collection('user').find({userid:id});

        cursor.toArray((err,doc) => {
            if(err){ console.log(err); }

            else{ res.send({"isSuccess" : doc[0].username}); }       
        });
            
        db.close();
    });
});

module.exports = router;