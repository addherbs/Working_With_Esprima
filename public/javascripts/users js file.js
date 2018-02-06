var express = require('express');
var router = express.Router();

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


// login route
router.get('/login', function (req,res) {
    res.render('login');
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


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
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




module.exports = router;

/*
{
    "type": "Program",
    "body": [
        {
            "type": "VariableDeclaration",
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "express"
                    },
                    "init": {
                        "type": "CallExpression",
                        "callee": {
                            "type": "Identifier",
                            "name": "require"
                        },
                        "arguments": [
                            {
                                "type": "Literal",
                                "value": "express",
                                "raw": "'express'"
                            }
                        ]
                    }
                }
            ],
            "kind": "var"
        },
        {
            "type": "VariableDeclaration",
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "router"
                    },
                    "init": {
                        "type": "CallExpression",
                        "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                                "type": "Identifier",
                                "name": "express"
                            },
                            "property": {
                                "type": "Identifier",
                                "name": "Router"
                            }
                        },
                        "arguments": []
                    }
                }
            ],
            "kind": "var"
        },
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "CallExpression",
                "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                        "type": "Identifier",
                        "name": "router"
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "get"
                    }
                },
                "arguments": [
                    {
                        "type": "Literal",
                        "value": "/",
                        "raw": "'/'"
                    },
                    {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [
                            {
                                "type": "Identifier",
                                "name": "req"
                            },
                            {
                                "type": "Identifier",
                                "name": "res"
                            },
                            {
                                "type": "Identifier",
                                "name": "next"
                            }
                        ],
                        "body": {
                            "type": "BlockStatement",
                            "body": [
                                {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "res"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "send"
                                            }
                                        },
                                        "arguments": [
                                            {
                                                "type": "Literal",
                                                "value": "respond with a resource",
                                                "raw": "'respond with a resource'"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "generator": false,
                        "expression": false,
                        "async": false
                    }
                ]
            }
        },
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "CallExpression",
                "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                        "type": "Identifier",
                        "name": "router"
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "get"
                    }
                },
                "arguments": [
                    {
                        "type": "Literal",
                        "value": "/register",
                        "raw": "'/register'"
                    },
                    {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [
                            {
                                "type": "Identifier",
                                "name": "req"
                            },
                            {
                                "type": "Identifier",
                                "name": "res"
                            }
                        ],
                        "body": {
                            "type": "BlockStatement",
                            "body": [
                                {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "res"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "render"
                                            }
                                        },
                                        "arguments": [
                                            {
                                                "type": "Literal",
                                                "value": "register",
                                                "raw": "'register'"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "generator": false,
                        "expression": false,
                        "async": false
                    }
                ]
            }
        },
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "CallExpression",
                "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                        "type": "Identifier",
                        "name": "router"
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "get"
                    }
                },
                "arguments": [
                    {
                        "type": "Literal",
                        "value": "/login",
                        "raw": "'/login'"
                    },
                    {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [
                            {
                                "type": "Identifier",
                                "name": "req"
                            },
                            {
                                "type": "Identifier",
                                "name": "res"
                            }
                        ],
                        "body": {
                            "type": "BlockStatement",
                            "body": [
                                {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "res"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "render"
                                            }
                                        },
                                        "arguments": [
                                            {
                                                "type": "Literal",
                                                "value": "login",
                                                "raw": "'login'"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "generator": false,
                        "expression": false,
                        "async": false
                    }
                ]
            }
        },
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "CallExpression",
                "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                        "type": "Identifier",
                        "name": "router"
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "get"
                    }
                },
                "arguments": [
                    {
                        "type": "Literal",
                        "value": "/logout",
                        "raw": "'/logout'"
                    },
                    {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [
                            {
                                "type": "Identifier",
                                "name": "req"
                            },
                            {
                                "type": "Identifier",
                                "name": "res"
                            }
                        ],
                        "body": {
                            "type": "BlockStatement",
                            "body": [
                                {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "req"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "logOut"
                                            }
                                        },
                                        "arguments": []
                                    }
                                },
                                {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "req"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "flash"
                                            }
                                        },
                                        "arguments": [
                                            {
                                                "type": "Literal",
                                                "value": "success_msg",
                                                "raw": "'success_msg'"
                                            },
                                            {
                                                "type": "Literal",
                                                "value": "You are logged out",
                                                "raw": "'You are logged out'"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "res"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "redirect"
                                            }
                                        },
                                        "arguments": [
                                            {
                                                "type": "Literal",
                                                "value": "/users/login",
                                                "raw": "'/users/login'"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "generator": false,
                        "expression": false,
                        "async": false
                    }
                ]
            }
        },
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "CallExpression",
                "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                        "type": "Identifier",
                        "name": "router"
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "post"
                    }
                },
                "arguments": [
                    {
                        "type": "Literal",
                        "value": "/twoButton",
                        "raw": "'/twoButton'"
                    },
                    {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [
                            {
                                "type": "Identifier",
                                "name": "req"
                            },
                            {
                                "type": "Identifier",
                                "name": "res"
                            }
                        ],
                        "body": {
                            "type": "BlockStatement",
                            "body": [
                                {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "req"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "body"
                                            }
                                        },
                                        "right": {
                                            "type": "CallExpression",
                                            "callee": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                    "type": "Identifier",
                                                    "name": "JSON"
                                                },
                                                "property": {
                                                    "type": "Identifier",
                                                    "name": "parse"
                                                }
                                            },
                                            "arguments": [
                                                {
                                                    "type": "CallExpression",
                                                    "callee": {
                                                        "type": "MemberExpression",
                                                        "computed": false,
                                                        "object": {
                                                            "type": "Identifier",
                                                            "name": "JSON"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "name": "stringify"
                                                        }
                                                    },
                                                    "arguments": [
                                                        {
                                                            "type": "MemberExpression",
                                                            "computed": false,
                                                            "object": {
                                                                "type": "Identifier",
                                                                "name": "req"
                                                            },
                                                            "property": {
                                                                "type": "Identifier",
                                                                "name": "body"
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "type": "IfStatement",
                                    "test": {
                                        "type": "CallExpression",
                                        "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                    "type": "Identifier",
                                                    "name": "req"
                                                },
                                                "property": {
                                                    "type": "Identifier",
                                                    "name": "body"
                                                }
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "hasOwnProperty"
                                            }
                                        },
                                        "arguments": [
                                            {
                                                "type": "Literal",
                                                "value": "createPortal",
                                                "raw": "'createPortal'"
                                            }
                                        ]
                                    },
                                    "consequent": {
                                        "type": "BlockStatement",
                                        "body": [
                                            {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "callee": {
                                                        "type": "MemberExpression",
                                                        "computed": false,
                                                        "object": {
                                                            "type": "Identifier",
                                                            "name": "console"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "name": "log"
                                                        }
                                                    },
                                                    "arguments": [
                                                        {
                                                            "type": "Literal",
                                                            "value": "create portal was clicked!!",
                                                            "raw": "'create portal was clicked!!'"
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "callee": {
                                                        "type": "MemberExpression",
                                                        "computed": false,
                                                        "object": {
                                                            "type": "Identifier",
                                                            "name": "res"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "name": "render"
                                                        }
                                                    },
                                                    "arguments": [
                                                        {
                                                            "type": "Literal",
                                                            "value": "createPortal",
                                                            "raw": "'createPortal'"
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    },
                                    "alternate": {
                                        "type": "BlockStatement",
                                        "body": [
                                            {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "callee": {
                                                        "type": "MemberExpression",
                                                        "computed": false,
                                                        "object": {
                                                            "type": "Identifier",
                                                            "name": "console"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "name": "log"
                                                        }
                                                    },
                                                    "arguments": [
                                                        {
                                                            "type": "Literal",
                                                            "value": "Show portal was clicked!!",
                                                            "raw": "'Show portal was clicked!!'"
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "callee": {
                                                        "type": "MemberExpression",
                                                        "computed": false,
                                                        "object": {
                                                            "type": "Identifier",
                                                            "name": "Portal"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "name": "getPortals"
                                                        }
                                                    },
                                                    "arguments": [
                                                        {
                                                            "type": "FunctionExpression",
                                                            "id": null,
                                                            "params": [
                                                                {
                                                                    "type": "Identifier",
                                                                    "name": "err"
                                                                },
                                                                {
                                                                    "type": "Identifier",
                                                                    "name": "portals"
                                                                }
                                                            ],
                                                            "body": {
                                                                "type": "BlockStatement",
                                                                "body": [
                                                                    {
                                                                        "type": "IfStatement",
                                                                        "test": {
                                                                            "type": "Identifier",
                                                                            "name": "err"
                                                                        },
                                                                        "consequent": {
                                                                            "type": "ThrowStatement",
                                                                            "argument": {
                                                                                "type": "Identifier",
                                                                                "name": "err"
                                                                            }
                                                                        },
                                                                        "alternate": null
                                                                    },
                                                                    {
                                                                        "type": "VariableDeclaration",
                                                                        "declarations": [
                                                                            {
                                                                                "type": "VariableDeclarator",
                                                                                "id": {
                                                                                    "type": "Identifier",
                                                                                    "name": "listOfAllPortals"
                                                                                },
                                                                                "init": null
                                                                            }
                                                                        ],
                                                                        "kind": "var"
                                                                    },
                                                                    {
                                                                        "type": "ExpressionStatement",
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "Identifier",
                                                                                "name": "listOfAllPortals"
                                                                            },
                                                                            "right": {
                                                                                "type": "Identifier",
                                                                                "name": "portals"
                                                                            }
                                                                        }
                                                                    },
                                                                    {
                                                                        "type": "ExpressionStatement",
                                                                        "expression": {
                                                                            "type": "CallExpression",
                                                                            "callee": {
                                                                                "type": "MemberExpression",
                                                                                "computed": false,
                                                                                "object": {
                                                                                    "type": "Identifier",
                                                                                    "name": "res"
                                                                                },
                                                                                "property": {
                                                                                    "type": "Identifier",
                                                                                    "name": "render"
                                                                                }
                                                                            },
                                                                            "arguments": [
                                                                                {
                                                                                    "type": "Literal",
                                                                                    "value": "showPortals",
                                                                                    "raw": "'showPortals'"
                                                                                },
                                                                                {
                                                                                    "type": "ObjectExpression",
                                                                                    "properties": [
                                                                                        {
                                                                                            "type": "Property",
                                                                                            "key": {
                                                                                                "type": "Identifier",
                                                                                                "name": "portals"
                                                                                            },
                                                                                            "computed": false,
                                                                                            "value": {
                                                                                                "type": "Identifier",
                                                                                                "name": "listOfAllPortals"
                                                                                            },
                                                                                            "kind": "init",
                                                                                            "method": false,
                                                                                            "shorthand": false
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                ]
                                                            },
                                                            "generator": false,
                                                            "expression": false,
                                                            "async": false
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "generator": false,
                        "expression": false,
                        "async": false
                    }
                ]
            }
        },
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "CallExpression",
                "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                        "type": "Identifier",
                        "name": "router"
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "post"
                    }
                },
                "arguments": [
                    {
                        "type": "Literal",
                        "value": "/refreshPortalList",
                        "raw": "'/refreshPortalList'"
                    },
                    {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [
                            {
                                "type": "Identifier",
                                "name": "req"
                            },
                            {
                                "type": "Identifier",
                                "name": "res"
                            }
                        ],
                        "body": {
                            "type": "BlockStatement",
                            "body": [
                                {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "console"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "log"
                                            }
                                        },
                                        "arguments": [
                                            {
                                                "type": "Literal",
                                                "value": "Refresh portal was clicked!!",
                                                "raw": "'Refresh portal was clicked!!'"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "Portal"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "getPortals"
                                            }
                                        },
                                        "arguments": [
                                            {
                                                "type": "FunctionExpression",
                                                "id": null,
                                                "params": [
                                                    {
                                                        "type": "Identifier",
                                                        "name": "err"
                                                    },
                                                    {
                                                        "type": "Identifier",
                                                        "name": "portals"
                                                    }
                                                ],
                                                "body": {
                                                    "type": "BlockStatement",
                                                    "body": [
                                                        {
                                                            "type": "ExpressionStatement",
                                                            "expression": {
                                                                "type": "CallExpression",
                                                                "callee": {
                                                                    "type": "MemberExpression",
                                                                    "computed": false,
                                                                    "object": {
                                                                        "type": "Identifier",
                                                                        "name": "console"
                                                                    },
                                                                    "property": {
                                                                        "type": "Identifier",
                                                                        "name": "log"
                                                                    }
                                                                },
                                                                "arguments": [
                                                                    {
                                                                        "type": "Literal",
                                                                        "value": "Here I am dude",
                                                                        "raw": "'Here I am dude'"
                                                                    }
                                                                ]
                                                            }
                                                        },
                                                        {
                                                            "type": "IfStatement",
                                                            "test": {
                                                                "type": "Identifier",
                                                                "name": "err"
                                                            },
                                                            "consequent": {
                                                                "type": "ThrowStatement",
                                                                "argument": {
                                                                    "type": "Identifier",
                                                                    "name": "err"
                                                                }
                                                            },
                                                            "alternate": null
                                                        },
                                                        {
                                                            "type": "ExpressionStatement",
                                                            "expression": {
                                                                "type": "CallExpression",
                                                                "callee": {
                                                                    "type": "MemberExpression",
                                                                    "computed": false,
                                                                    "object": {
                                                                        "type": "Identifier",
                                                                        "name": "res"
                                                                    },
                                                                    "property": {
                                                                        "type": "Identifier",
                                                                        "name": "render"
                                                                    }
                                                                },
                                                                "arguments": [
                                                                    {
                                                                        "type": "Literal",
                                                                        "value": "showPortals",
                                                                        "raw": "'showPortals'"
                                                                    },
                                                                    {
                                                                        "type": "ObjectExpression",
                                                                        "properties": [
                                                                            {
                                                                                "type": "Property",
                                                                                "key": {
                                                                                    "type": "Identifier",
                                                                                    "name": "portals"
                                                                                },
                                                                                "computed": false,
                                                                                "value": {
                                                                                    "type": "Identifier",
                                                                                    "name": "portals"
                                                                                },
                                                                                "kind": "init",
                                                                                "method": false,
                                                                                "shorthand": false
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                },
                                                "generator": false,
                                                "expression": false,
                                                "async": false
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "generator": false,
                        "expression": false,
                        "async": false
                    }
                ]
            }
        },
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "CallExpression",
                "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                        "type": "Identifier",
                        "name": "passport"
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "serializeUser"
                    }
                },
                "arguments": [
                    {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [
                            {
                                "type": "Identifier",
                                "name": "user"
                            },
                            {
                                "type": "Identifier",
                                "name": "done"
                            }
                        ],
                        "body": {
                            "type": "BlockStatement",
                            "body": [
                                {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                            "type": "Identifier",
                                            "name": "done"
                                        },
                                        "arguments": [
                                            {
                                                "type": "Literal",
                                                "value": null,
                                                "raw": "null"
                                            },
                                            {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                    "type": "Identifier",
                                                    "name": "user"
                                                },
                                                "property": {
                                                    "type": "Identifier",
                                                    "name": "id"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "generator": false,
                        "expression": false,
                        "async": false
                    }
                ]
            }
        },
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "CallExpression",
                "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                        "type": "Identifier",
                        "name": "passport"
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "deserializeUser"
                    }
                },
                "arguments": [
                    {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [
                            {
                                "type": "Identifier",
                                "name": "id"
                            },
                            {
                                "type": "Identifier",
                                "name": "done"
                            }
                        ],
                        "body": {
                            "type": "BlockStatement",
                            "body": [
                                {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "User"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "getUserById"
                                            }
                                        },
                                        "arguments": [
                                            {
                                                "type": "Identifier",
                                                "name": "id"
                                            },
                                            {
                                                "type": "FunctionExpression",
                                                "id": null,
                                                "params": [
                                                    {
                                                        "type": "Identifier",
                                                        "name": "err"
                                                    },
                                                    {
                                                        "type": "Identifier",
                                                        "name": "user"
                                                    }
                                                ],
                                                "body": {
                                                    "type": "BlockStatement",
                                                    "body": [
                                                        {
                                                            "type": "ExpressionStatement",
                                                            "expression": {
                                                                "type": "CallExpression",
                                                                "callee": {
                                                                    "type": "Identifier",
                                                                    "name": "done"
                                                                },
                                                                "arguments": [
                                                                    {
                                                                        "type": "Identifier",
                                                                        "name": "err"
                                                                    },
                                                                    {
                                                                        "type": "Identifier",
                                                                        "name": "user"
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                },
                                                "generator": false,
                                                "expression": false,
                                                "async": false
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "generator": false,
                        "expression": false,
                        "async": false
                    }
                ]
            }
        }
    ],
    "sourceType": "script"
}*/
