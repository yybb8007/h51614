const express = require("express");
var app = express();
app.use(express.static("www"));
app.get("/remote",(req,res)=>{
	var tom={
		name:"tom",
		age:22
	}
	var callName=req["query"];
	var data=callName+"(name:\"tom\",age:22)";
	console.log(callName);
	res.send(data);
});
app.listen(7000);
console.log("服务已启动");


