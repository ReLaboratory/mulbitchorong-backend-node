const express = require('express');
const router = express.Router();
const mongodb = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/todolist';
 

router.post('/', (req, res, next) => {
    const id = req.body.id;
    const name = req.body.name;

    const query = {userid:id, };
    const operator = {$pull : {usertodo:name} };
    const option = {upsert : true};
    mongodb.connect(url, (err,db) => {

        const cursor = db.collection('user').update(query,operator,option, (err,upserted) => {
            if(err){
                console.log(err);
                res.send({"delchk" : false});
            }
            
            else{
                res.send({"delchk" : true});
            }
        });

        db.close();
    });
    
});

module.exports = router;