var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = require('../models/user.server.model');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test', function(req, res, next){
  var user = new User({

  code: "10000",
  data: {
    securityCode: "SH.600369",
    name: "西南证券",
    now: 4780,
    close: 4760,
    open: 4760,
    high: 4790,
    low: 4750,
    volume: 10876300,
    bid1: 4780,
    bid2: 4770,
    bid3: 4760,
    bid4: 4750,
    bid5: 4740,
    bid1Volume: 12000,
    bid2Volume: 444300,
    bid3Volume: 484900,
    bid4Volume: 571300,
    bid5Volume: 246300,
    ask1: 4790,
    ask2: 4800,
    ask3: 4810,
    ask4: 4820,
    ask5: 4830,
    ask1Volume: 1093900,
    ask2Volume: 1051400,
    ask3Volume: 726700,
    ask4Volume: 936300,
    ask5Volume: 358900,
    transactions: [
      {
        time: "10:59:38",
        price: 4780,
        volume: 103,
        action: "S",
        amount: 49234000
      },
      {
        time: "10:59:33",
        price: 4780,
        volume: 2,
        action: "S",
        amount: 956000
      },
      {
        time: "10:59:30",
        price: 4780,
        volume: 10,
        action: "S",
        amount: 4780000
      },
      {
        time: "10:59:24",
        price: 4790,
        volume: 1,
        action: "B",
        amount: 479000
      },
      {
        time: "10:59:21",
        price: 4780,
        volume: 2,
        action: "S",
        amount: 2390000
      },
      {
        time: "10:59:15",
        price: 4780,
        volume: 2,
        action: "S",
        amount: 956000
      }
    ],
    datetime: "2017-12-19 10:59:33"
  },
  msg: "success"
});

  user.save(function(err){
    if(err){
      res.end('Error');
      return next();
    }

    User.find({}, function(err, docs){
      if(err) {
        res.end('Error');
        return next();
      }

      res.json(docs);
    });
  });
});

module.exports = router;
