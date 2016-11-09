
requirejs.config({
    baseUrl:'js/lib',
    paths:{
        'app':'../app',
        'jquery':'jquery-3.1.1',
        'myutil':'../app/myutil'
    },
    shim:{
        'myutil':{
            exports:'createXHR'
        }
    }
});


define(["app/index3nav","app/index4banner","app/index5banner","app/index7main"],function(nav2,banner2,banner4,main2){
    var root=document.querySelector("#nav2 ul");
    nav2(root);
    
    var div1=document.querySelector("#banner2 .div1");
    banner2(div1);
    
    var ul=document.querySelector("#banner4 .ul");
    banner4(ul);
    
    var div1=document.querySelector("#main2 .div1");
    main2(div1);
    
    
});

