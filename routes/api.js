var express = require('express');
var router = express.Router();

router.use(function(){
  responseData = {
     code:0,
     message:''
  }
});


/* GET users listing. */
router.post('/user/register', function(req, res, next) {
  var username = req.body.username
  var password = req.body.password
});

module.exports = router;
