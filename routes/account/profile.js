const express = require('express');
const router = express.Router();
const mongodb = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/todolist';
 
router.post('/', (req, res, next) => {
    const id = req.body.id

    mongodb.connect(url, (err,db) => {
        const cursor = db.collection('user').find({userid:id});

        cursor.toArray((err,doc) => {
            if(err){ console.log(err); }
            else{
                if(doc != null){ 
                    res.send({"doc" : doc[0].usertodo});                
                }
            }
        });

        db.close();
    });
    
});

module.exports = router;