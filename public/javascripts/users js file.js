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
        }
    ],
    "sourceType": "script"
}
 */

