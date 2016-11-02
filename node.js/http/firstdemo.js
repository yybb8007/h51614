const http = require("http");
var url = require("url");
var fs = require("fs");
//http://user:pass@host:port/path

// var urlStr = "http://user:password@10.0.161.193:8080/index.html";
// var urlObj = url.parse(urlStr);
// console.log(urlObj);
// console.log("=============================");
// console.log(url.format(urlObj));

//创建了一个服务器对象
const server = http.createServer(function(req,res){
	fs.readFile("c:\\index.html",(err,data) =>{
		res.writeHead(200,{'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	})
	console.log("请求已经接收");
});
server.listen(7000);
console.log("服务器已经启动");









