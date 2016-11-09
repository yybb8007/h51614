var express = require("express");
var router = express.Router();

router.post("/",function(req,res,next){
	for (p in req.body){
		var o = JSON.parse(p);
		console.log(o.username);
		console.log(o.pwd);
	}
})

router.get("/login/:u/:p",(req, res) => {
	var username = "admin";
	var password = "123abc";
	//处理用户传递过来的数据
	console.log(req.params.u);
	console.log(req.params.p);
	//跨域访问里的cross方法
	res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "X-Requested-With");  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

    res.header("Content-type","application/json");
    var obj = {};

	if (username == req.params.u && password == req.params.p){
		 obj.msg = "登录成功";
		 obj.statusCode = "yes";
	}else{
		 obj.msg = "用户名或者口令不对";
		 obj.statusCode = "no";
	}
	res.send(JSON.stringify(obj));
})

router.listen(7000);
console.log("服务已启动");