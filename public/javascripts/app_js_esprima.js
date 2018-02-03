var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
// uncomment after placing your favicon in /public
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
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
                        "name": "path"
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
                                "value": "path",
                                "raw": "'path'"
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
                        "name": "favicon"
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
                                "value": "serve-favicon",
                                "raw": "'serve-favicon'"
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
                        "name": "logger"
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
                                "value": "morgan",
                                "raw": "'morgan'"
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
                        "name": "cookieParser"
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
                                "value": "cookie-parser",
                                "raw": "'cookie-parser'"
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
                        "name": "bodyParser"
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
                                "value": "body-parser",
                                "raw": "'body-parser'"
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
                        "name": "app"
                    },
                    "init": {
                        "type": "CallExpression",
                        "callee": {
                            "type": "Identifier",
                            "name": "express"
                        },
                        "arguments": []
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
                        "name": "index"
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
                                "value": "./routes/index",
                                "raw": "'./routes/index'"
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
                        "name": "users"
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
                                "value": "./routes/users",
                                "raw": "'./routes/users'"
                            }
                        ]
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
                        "name": "app"
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "set"
                    }
                },
                "arguments": [
                    {
                        "type": "Literal",
                        "value": "views",
                        "raw": "'views'"
                    },
                    {
                        "type": "CallExpression",
                        "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                                "type": "Identifier",
                                "name": "path"
                            },
                            "property": {
                                "type": "Identifier",
                                "name": "join"
                            }
                        },
                        "arguments": [
                            {
                                "type": "Identifier",
                                "name": "__dirname"
                            },
                            {
                                "type": "Literal",
                                "value": "views",
                                "raw": "'views'"
                            }
                        ]
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
                        "name": "app"
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "set"
                    }
                },
                "arguments": [
                    {
                        "type": "Literal",
                        "value": "view engine",
                        "raw": "'view engine'"
                    },
                    {
                        "type": "Literal",
                        "value": "hbs",
                        "raw": "'hbs'"
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
                        "name": "app"
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "use"
                    }
                },
                "arguments": [
                    {
                        "type": "CallExpression",
                        "callee": {
                            "type": "Identifier",
                            "name": "logger"
                        },
                        "arguments": [
                            {
                                "type": "Literal",
                                "value": "dev",
                                "raw": "'dev'"
                            }
                        ]
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
                        "name": "app"
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "use"
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
                                "name": "bodyParser"
                            },
                            "property": {
                                "type": "Identifier",
                                "name": "json"
                            }
                        },
                        "arguments": []
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
                        "name": "app"
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "use"
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
                                "name": "bodyParser"
                            },
                            "property": {
                                "type": "Identifier",
                                "name": "urlencoded"
                            }
                        },
                        "arguments": [
                            {
                                "type": "ObjectExpression",
                                "properties": [
                                    {
                                        "type": "Property",
                                        "key": {
                                            "type": "Identifier",
                                            "name": "extended"
                                        },
                                        "computed": false,
                                        "value": {
                                            "type": "Literal",
                                            "value": false,
                                            "raw": "false"
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "shorthand": false
                                    }
                                ]
                            }
                        ]
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
                        "name": "app"
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "use"
                    }
                },
                "arguments": [
                    {
                        "type": "CallExpression",
                        "callee": {
                            "type": "Identifier",
                            "name": "cookieParser"
                        },
                        "arguments": []
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
                        "name": "app"
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "use"
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
                                "name": "express"
                            },
                            "property": {
                                "type": "Identifier",
                                "name": "static"
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
                                        "name": "path"
                                    },
                                    "property": {
                                        "type": "Identifier",
                                        "name": "join"
                                    }
                                },
                                "arguments": [
                                    {
                                        "type": "Identifier",
                                        "name": "__dirname"
                                    },
                                    {
                                        "type": "Literal",
                                        "value": "public",
                                        "raw": "'public'"
                                    }
                                ]
                            }
                        ]
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
                        "name": "app"
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "use"
                    }
                },
                "arguments": [
                    {
                        "type": "Literal",
                        "value": "/users",
                        "raw": "'/users'"
                    },
                    {
                        "type": "Identifier",
                        "name": "users"
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
                        "name": "app"
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "use"
                    }
                },
                "arguments": [
                    {
                        "type": "Literal",
                        "value": "/",
                        "raw": "'/'"
                    },
                    {
                        "type": "Identifier",
                        "name": "index"
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
                        "name": "app"
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "use"
                    }
                },
                "arguments": [
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
                                    "type": "VariableDeclaration",
                                    "declarations": [
                                        {
                                            "type": "VariableDeclarator",
                                            "id": {
                                                "type": "Identifier",
                                                "name": "err"
                                            },
                                            "init": {
                                                "type": "NewExpression",
                                                "callee": {
                                                    "type": "Identifier",
                                                    "name": "Error"
                                                },
                                                "arguments": [
                                                    {
                                                        "type": "Literal",
                                                        "value": "Not Found",
                                                        "raw": "'Not Found'"
                                                    }
                                                ]
                                            }
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
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "err"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "status"
                                            }
                                        },
                                        "right": {
                                            "type": "Literal",
                                            "value": 404,
                                            "raw": "404"
                                        }
                                    }
                                },
                                {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                            "type": "Identifier",
                                            "name": "next"
                                        },
                                        "arguments": [
                                            {
                                                "type": "Identifier",
                                                "name": "err"
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
                        "name": "app"
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "use"
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
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                    "type": "Identifier",
                                                    "name": "res"
                                                },
                                                "property": {
                                                    "type": "Identifier",
                                                    "name": "locals"
                                                }
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "message"
                                            }
                                        },
                                        "right": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "err"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "message"
                                            }
                                        }
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
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                    "type": "Identifier",
                                                    "name": "res"
                                                },
                                                "property": {
                                                    "type": "Identifier",
                                                    "name": "locals"
                                                }
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "error"
                                            }
                                        },
                                        "right": {
                                            "type": "ConditionalExpression",
                                            "test": {
                                                "type": "BinaryExpression",
                                                "operator": "===",
                                                "left": {
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
                                                                "name": "app"
                                                            }
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "name": "get"
                                                        }
                                                    },
                                                    "arguments": [
                                                        {
                                                            "type": "Literal",
                                                            "value": "env",
                                                            "raw": "'env'"
                                                        }
                                                    ]
                                                },
                                                "right": {
                                                    "type": "Literal",
                                                    "value": "development",
                                                    "raw": "'development'"
                                                }
                                            },
                                            "consequent": {
                                                "type": "Identifier",
                                                "name": "err"
                                            },
                                            "alternate": {
                                                "type": "ObjectExpression",
                                                "properties": []
                                            }
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
                                                "name": "status"
                                            }
                                        },
                                        "arguments": [
                                            {
                                                "type": "LogicalExpression",
                                                "operator": "||",
                                                "left": {
                                                    "type": "MemberExpression",
                                                    "computed": false,
                                                    "object": {
                                                        "type": "Identifier",
                                                        "name": "err"
                                                    },
                                                    "property": {
                                                        "type": "Identifier",
                                                        "name": "status"
                                                    }
                                                },
                                                "right": {
                                                    "type": "Literal",
                                                    "value": 500,
                                                    "raw": "500"
                                                }
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
                                                "value": "error",
                                                "raw": "'error'"
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
                    "name": "app"
                }
            }
        }
    ],
    "sourceType": "script"
}
*/