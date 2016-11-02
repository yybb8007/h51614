var fs = require("fs");
var app = require("appppp");
// console.log(fs);

// fs.readFile("c:\\data.txt",cb);
// function cb(err, data){
// 	if (err) {
// 		console.log("错误：" + err)；
// 	}
// 	console.log(data.toString() + "world!");
// 	console.log("正确：" + data);
// }

// fs.readFile("c:\\data.txt",(err,data)=>{
// 	if (err) {
// 		throw err;
// 	};
// 	console.log(data.toString());
// })
fs.readFile("d:\\data1.txt",cb);
function cb(err,data){
	if (err) {
		console.log("错误" + err);
	}else{
		fs.writeFile("c:\\data1.txt",data.toString(),(err,data)=>{
			if (err) throw err;
			console.log("成功")；
		})
	}
}



