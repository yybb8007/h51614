var Singleton = function(name){
	this.name = name;
	this.instance = null;
}

Singleton.prototype.getName = function(){
	console.log(this.name);
}

//该方法就是创建Singleton构造函数对象的方法
Singleton.prototype,getInstance = function(name){
	if (!this.instance) {
		this.instance = new Singleton(name);
	}
	return this.instance;
}
console.log(Singleton.prototype.getInstance);
var a = Singleton.prototype.getInstance("tom");
var b = Singleton.prototype.getInstance("mark");
console.log(a === b);