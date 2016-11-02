var fs = require("fs");
var app = require("appppp");

var data = "谁写不完不能吃饭";

fs.writeFile("d:\\data.txt",data,(err,data) => {
	if (err) 
		throw new Error("写文件出错")；
	app.print("文件写入数据完毕")；
})