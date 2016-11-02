//加载express模块
const express = require("express");
console.log(typeof express);
var app = express();

//通过express创建get方法的服务

//第一个参数表示访问get方法的路径	第二个参数表示回调函数
app.get("/",function(req,res){
	res.send("hi");
}); 
app.post("/",function(req,res){
	res.send("hi post");
});
app.get("/mm",function(req,res){
	res.send("world");
});

app.listen(7000);

