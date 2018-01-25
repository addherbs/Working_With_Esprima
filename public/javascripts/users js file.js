// JS FILE
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


router.get('/logout', function (req,res) {
    req.logOut();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/users/login');
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


passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.getUserById(id, function (err, user) {
        done(err, user);
    });
});


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
*/
