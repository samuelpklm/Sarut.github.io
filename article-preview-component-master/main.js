$(document).ready(function(){

    let pantalla;
   
    $("#redes").click(function(){
        if(($(window).width()) <= 376){ 
                $(".pie2").css({"display": "flex"});
                $(".uno").css({"display": "flex"});     
         
        }else{     
                $(".social").css({"display": "flex"});
                $(".conjunto-share img").css({"display": "inline"});    
     
        }
    });

    $("#share2").click(function(){
        $(".pie2").css({"display": "none"});
       
    });

    $("#redes2").click(function(){
        $(".pie2").css({"display": "none"});
       
    });

    $("#share").click(function(){
        $(".social").css({"display": "none"});
        $(".conjunto-share img").css({"display": "none"});
    });

    $("#redes").dblclick(function(){
        $(".social").css({"display": "none"});
        $(".conjunto-share img").css({"display": "none"});
    });
    

});

