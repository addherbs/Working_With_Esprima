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

// verify which button is pressed
router.post('/twoButton', function (req,res) {

    req.body = JSON.parse(JSON.stringify(req.body));
    if(req.body.hasOwnProperty('createPortal')){
        console.log('create portal was clicked!!');
        res.render('createPortal');
    }else{
        console.log('Show portal was clicked!!');

        Portal.getPortals(function(err, portals){
            if (err) throw err;
            var listOfAllPortals;
            listOfAllPortals = portals;
            res.render('showPortals', {portals:listOfAllPortals});
        });
    }
});

module.exports = router;
