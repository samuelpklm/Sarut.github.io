let numero;

$(document).ready(function(){

        $("button").click(function(){
           $(".contenido").remove();
           $(".contenido-2").css({"display": "flex"});
           $(".rating .eleccion").prepend(`d ${numero} o`);
     });

    $(".puntuacion .1").click(function(){
        $(".puntuacion span").removeClass("orange");
        $(this).addClass("orange");
        numero = 1;
    })

    $(".puntuacion .2").click(function(){
        $(".puntuacion span").removeClass("orange");
        $(this).addClass("orange");
        numero = 2;
    })

    $(".puntuacion .3").click(function(){
        $(".puntuacion span").removeClass("orange");
        $(this).addClass("orange");
        numero = 3;
    })

    $(".puntuacion .4").click(function(){
        $(".puntuacion span").removeClass("orange");
        $(this).addClass("orange");
        numero = 4;
    })

    $(".puntuacion .5").click(function(){
        $(".puntuacion span").removeClass("orange");
        $(this).addClass("orange");
        numero = 5;
    })



});