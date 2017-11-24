var express = require("express");
var app = express();

app.get("/", function(req,res){
	res.send("Hi There");
	console.log("Sombody is connecting");
});

app.listen(3000, function(){
	console.log("starting server on port 3000");
});
