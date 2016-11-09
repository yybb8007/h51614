
define({
	baseUrl:"http://10.0.161.108",
	port:7000,
	getBaseURL:function(){
		return this.baseUrl+":"+this.port;
	}
})