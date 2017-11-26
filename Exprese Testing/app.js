var express = require('express');
app = express();
app.use(express.static("public"));

app.get("/", function(req,res){
	res.render("index.ejs");
});

app.get("*", function(req,res){
	res.send("You have reached an unknown page.")
});

app.listen(3000, function(){
	console.log("Starting Server");
});
