var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;


// For the sample this. the JSON is:

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
                                            "name": "render"
                                        }
                                    },
                                    "arguments": [
                                        {
                                            "type": "Literal",
                                            "value": "index",
                                            "raw": "'index'"
                                        },
                                        {
                                            "type": "ObjectExpression",
                                            "properties": [
                                                {
                                                    "type": "Property",
                                                    "key": {
                                                        "type": "Identifier",
                                                        "name": "title"
                                                    },
                                                    "computed": false,
                                                    "value": {
                                                        "type": "Literal",
                                                        "value": "Express",
                                                        "raw": "'Express'"
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
    },
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
                    "name": "module"
                },
                "property": {
                    "type": "Identifier",
                    "name": "exports"
                }
            },
            "right": {
                "type": "Identifier",
                "name": "router"
            }
        }
    }
],
    "sourceType": "script"
}



*/