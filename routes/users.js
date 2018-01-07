var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



// register route
router.get('/register', function (req,res) {
    res.render('register');
});


// login route
router.get('/login', function (req,res) {
    res.render('login');
});


module.exports = router;
