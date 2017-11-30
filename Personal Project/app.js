var express = require('express');
app = express();
app.use(express.static("public"));

app.get("/:str", function(req,res){
	var str = req.params.str;
	console.log("Someone is to page " + str);

	res.send("you went to page " + str)
	// if(str === "bob"){
	// 	res.send("we dont talk about bob");
	// }
});

app.get("*", function(req,res){
	// res.send("You have reached an unknown page.")
	res.render("home.ejs")
	console.log("Someone is connecting");
});

app.listen(3000, function(){
	console.log("Starting Server");
});
