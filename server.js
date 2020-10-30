var express = require("express");
var path = require("path");

var app = express();

var PORT = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res){
    res.send("You are at the homepage");
})

app.post("/post", function(req, res){
    User = req.body;
    res.send("Welcome " + User.user);
})

app.delete("/delete", function(req, res){
    Id = req.body;
    console.log("Task Id: " + Id.TaskId);
    res.send("(delete:true)");
})

app.put("/put/:Id", function(req, res){
    IdVar = req.params.Id;
    res.send("Task " + IdVar + " has been updated")
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });