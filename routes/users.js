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

// refresh button which button is pressed
router.post('/refreshPortalList', function (req,res) {
    console.log('Refresh portal was clicked!!');
    Portal.getPortals(function(err, portals){
        console.log('Here I am dude');
        if (err) throw err;
        res.render('showPortals', {portals:portals});
    });
});

// Create a portal
router.post('/createPortal', function (req,res) {
    var pName = req.body.pName;
    var pPassword = req.body.pPassword;
    var hours = req.body.hours;
    var minutes = req.body.mins;
    var secs = req.body.secs;
    var message = req.body.message;
    var count = req.body.count;
    var owner_id = req.body.owner_id;
    var owner_username = req.body.owner_username;
    var owner_email = req.body.owner_email;

    var cpPassword = req.body.cpPassword;

    var owner_details = {
        "owner_id" :owner_id ,
        "owner_username": owner_username,
        "owner_email": owner_email
    };

    var ttl = parseInt(hours*3600) + parseInt(minutes*60) + parseInt(secs);
    console.log("ttl: ", ttl);

    console.log("Portal Name:"+ pName + "\nPortal Password:"+pPassword +"\nHours-Mins-Secs: "+ hours +"-" +minutes+ "-"+ secs +
        "\nMessage:" + message + "\nTotal TTL: "+ ttl + "\t count: " + count);

    var currentDate = new Date();
    console.log("Current Date is: ", currentDate);
    currentDate.setSeconds(currentDate.getSeconds() + ttl);
    console.log("Current Date is: ", currentDate);

    //Validation of form
    req.checkBody('pName', 'Portal Name is required').notEmpty();
    req.checkBody('pPassword', 'Portal Password is required').notEmpty();
    req.checkBody('hours', 'Hours is required/ Otherwise enter 0/ Should be Number').notEmpty().isNumeric();
    req.checkBody('mins', 'Minutes is required/ Otherwise enter 0/ Should be Number').notEmpty().isNumeric();
    req.checkBody('secs', 'Seconds is required/ Otherwise enter 0/ Should be Number').notEmpty().isNumeric();
    req.checkBody('message', 'There has to be a message').notEmpty();
    req.checkBody('count', 'You have to enter open count/ Atleast 1/ Should be Number').notEmpty().isNumeric();
    req.checkBody('cpPassword', 'Confirm Portal Password should match Portal Password').notEmpty().equals(req.body.pPassword);


    var portalData = {
        PortalName: pName,
        PortalPassword: pPassword,
        TTL: ttl,
        Message: message,
        Count: count,
        Owner_Details: owner_details,
        expireAt: new Date(currentDate)
    };

    var errors= req.validationErrors();
    if(errors){
        res.render('createPortal',{
            errors:errors
        });
    }else{
        var newPortal = new Portal(portalData);

        Portal.createPortal(newPortal, function(err, portal){
            if (err) throw err;
        });

        req.flash('success_msg', 'You have successfully created a portal.. Inform your friend to check');

        res.redirect('/');
    }

});


passport.use(new LocalStrategy(
    function (username, password, done) {
        User.getUserByUsername(username, function (err, user) {
            if (err) throw err;
            if (!user) {
                return done(null, false, { message: 'Unknown user' });
            }
            User.comparePassword(password, user.Password, function (err, isMatch) {
                if (err) throw err;
                if (isMatch) {
                    return done(null, user );
                }
                else {
                    return done(null, false, { message: 'Invalid password' });
                }
            });
        });
    }
));


passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.getUserById(id, function (err, user) {
        done(err, user);
    });
});


router.post('/register', function (req,res) {

    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var cpassword = req.body.cpassword;
    var username = req.body.username;

    //Validation of form
    req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('username', 'Username is required').notEmpty();
    req.checkBody('email', 'EmailID is required').notEmpty();
    req.checkBody('email', 'Email is invalid').isEmail();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('cpassword', 'Passwords should match').equals(req.body.password);
    console.log(cpassword);

    var errors= req.validationErrors();
    if(errors){
        res.render('register',{
            errors:errors
        });
    }else{
        var newUser = new User({
            FirstName: name,
            UserName: username,
            EmailID: email,
            Password: password
        });


        User.createUser(newUser, function(err, user){
            if (err) throw err;
            console.log(user);
        });

        req.flash('success_msg', 'You are now registered.. Login to continue');
        res.redirect('/users/login');
    }

});



router.post('/login',
    passport.authenticate('local', {successRedirect:'/', failureRedirect:'/users/login',failureFlash: true}),
    function(req, res) {
        res.redirect('/');
    });


router.get('/logout', function (req,res) {
    req.logOut();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/users/login');
});


module.exports = router;