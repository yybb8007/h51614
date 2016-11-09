
define(["myutil","app/myfn"],function(x,url){
	function getBannerData(div1){
		var xhr=x();
		xhr.open("get",url.getBaseURL()+"/zbanner2");
		xhr.send(null);
		xhr.onreadystatechange=function(e){
			if (xhr.readyState===4) {
				var navs=JSON.parse(xhr.responseText);
				navs.forEach(function(elem,index){
					var a=document.createElement("a");
					var img=document.createElement("img");
					img.setAttribute("src",elem["imgUrl"]);
					a.appendChild(img);
					a.setAttribute("href",elem["href"]);
					div1.appendChild(a);
				})
				
				$('#banner2 .div1').css('left','0');
				setInterval(function(){
					var left=$('#banner2 .div1').offset().left;
					$('#banner2 .div1').css('left',left-1920+'px');
					if(left==-5760){
						$('#banner2 .div1').css('left','0');
					}
				},2000)
			}
		}
	}
	return getBannerData;
})


