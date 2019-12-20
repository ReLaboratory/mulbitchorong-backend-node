const express = require('express');
const router = express.Router();
const mongodb = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/mulbitchorong-backend-node';

router.post('/', (req, res, next) => {
    const name = req.body.uname;
    const id = req.body.uid;
    const pswd = req.body.pw;
    const insert_d = {username : name, userid : id, userpswd : pswd, proimg : ""};

    mongodb.connect(url, (err,db) => {
        const cursor = db.collection('user').insert(insert_d);
        if(err){ res.send({"isSuccess" : false, "uname" : name})}

        res.send({"isSuccess" : true, "uname" : name});                

        db.close();
    });
});

module.exports = router;