var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = require('../models/user.server.model');


var bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/getData', (req, res) => {
    User.find((err, doc) => {
        res.json(doc);
    })
})

router.post('/test', function (req, res, next) {
    let new_data = req.body.new_data;
    console.log(new_data._id);
    delete new_data._id;
    User.create(new_data, function (err, doc) {
        if (err) {
            console.log(err);
            res.end('Error');
            return;
        }
    });
    res.send('save is ok')
    // User.find(function (err, docs) {
    //     if (err) {
    //         res.end('Error');
    //         return next();
    //     }
    //     res.json(docs);
    // });
});

// 删除
router.post('/delete', async (req, res, next) => {
    let name = req.body.name;
    console.log(name);
    User.deleteOne({ 'data.name': name }, (err, doc) => {
        if (err) {
            console.log(err);
            return;
        }
        res.send('del is over')
    })
})

// 更新
router.post('/update', async (req, res, next) => {
    let securityCode = req.body.securityCode;
    let updateName = req.body.updateName;
    console.log(updateName);
    User.updateOne({ 'data.securityCode': securityCode }, { "data.name": updateName }, (err, doc) => {
        console.log(doc);
    })
    res.send('ok')
})

// 查找
router.post('/find', async (req, res, next) => {
    let new_name = req.body.new_name
    User.find({ 'data.name': new_name }, (err, doc) => {
        console.log(doc);
        res.json(doc);
    })
})

module.exports = router;
