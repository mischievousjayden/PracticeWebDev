var express = require("express");
var bodyParser = require("body-parser");

var todos = [
    { 
        "description" : "Get groceries",
        "tags"  : [ "shopping", "chores" ]
    },
    { 
        "description" : "Make up some new ToDos",
        "tags"  : [ "writing", "work" ]
    },
    {
        "description" : "Prep for Monday's class",
        "tags"  : [ "work", "teaching" ]
    },
    { 
        "description" : "Answer emails",
        "tags"  : [ "work" ]
    },
    { 
        "description" : "Take Gracie to the park",
        "tags"  : [ "chores", "pets" ]
    },
    { 
        "description" : "Finish writing this book",
        "tags"  : [ "writing", "work" ]
    }
];


var app = express();
var urlencodeParser = bodyParser.urlencoded({ extended: false });

app.use(express.static(__dirname + "/client"));
app.get('/', function(req, res) {
    res.sendFile("index.html");
});

app.get("/api/getToDos", function(req, res) {
    res.json(todos);
});

app.post("/api/postToDo", urlencodeParser, function(req, res) {
    var todo = {
        "description":req.body.description,
        "tags":req.body.tags.split(",")
    };
    todos.push(todo);
    res.json({"message":"You posted do the server!"});
});

var port_num = 3000;
app.listen(port_num, function() {
    console.log("Server running on port %s", port_num);
});

