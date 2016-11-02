const express = require("express");
var fs = require("fs");
var app = express();
var gData = null;

fs.readFile("E:\\my1614\\yztc_html5_repositorys\\books\\book.json",function(err,data){
	if(err) 
	  {throw new Error("读取数据出错！");}
	gData = data;
	app.listen(7000);
	console.log("服务已启动");

});

app.get("/books",function(req, res){
	res.setHeader('Content-Type', 'application/json');
	res.send(gData);
});