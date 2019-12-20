const express = require('express');
const router = express.Router();
const mongodb = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/mulbitchorong-backend-node';

router.post('/', (req, res, next) => {
    const id = req.body.uid;
    const pswd = req.body.pw;

    mongodb.connect(url, (err,db) => {
        if (err) { console.error(err); }

        const cursor = db.collection('user').find({userid:id});

        cursor.toArray((err,doc) => {
            if(err){ console.log(err); }

            else{
                if(doc[0].userpswd == pswd&& doc != null) {
                    res.send({"isSuccess" : true, "uname" : doc[0].username});
                }
                else{
                        res.send({"isSuccess" : false});
                }  
            }       
        });
            
        db.close();
    });
});

module.exports = router;