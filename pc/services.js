const express = require("express");
var fs = require("fs");
var app = express();
var nav2Data = null;
var banner2Data = null;
var menuData = null;
var main2Data = null;

fs.readFile("data/nav2.json",function(err,data){
	if(err) 
		throw new Error("读取数据出错！");
	nav2Data = data;
	fs.readFile("data/banner2.json",function(err1,data1){
		if(err1) 
			throw new Error("读取数据出错！");
		banner2Data = data1;
		fs.readFile("data/menu.json",function(err2,data2){
			if(err2) 
				throw new Error("读取数据出错！");
			menuData = data2;
			fs.readFile("data/main2.json",function(err3,data3){
				if(err3) 
					throw new Error("读取数据出错！");
				main2Data = data3;
				app.listen(7000);
				console.log("服务已启动");
			});
		});
	});

});

app.use(express.static("www"));
app.use("/",function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "X-Requested-With");  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	next();
});

app.get("/znav2",function(req, res){
	res.setHeader('Content-Type', 'application/json');
	res.send(nav2Data);
});
app.get("/zbanner2",function(req, res){
	res.setHeader('Content-Type', 'application/json');
	res.send(banner2Data);
});
app.get("/zmenu",function(req, res){
	res.setHeader('Content-Type', 'application/json');
	res.send(menuData);
});
app.get("/zmain2",function(req, res){
	res.setHeader('Content-Type', 'application/json');
	res.send(main2Data);
});