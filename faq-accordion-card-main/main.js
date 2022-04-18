$(document).ready(function(){



    $(".abajo-uno").click(function(){
        $(this).toggleClass("rotar");
        $(".titulo").toggleClass("negrita");
        $(".BBB").removeClass("negrita");
        $(".B").slideUp("fast");
        $(".BB").removeClass("rotar");
        $(".respuesta-uno").slideToggle();
    });

        $(".abajo-dos").click(function(){
            $(this).toggleClass("rotar");
            $(".titulo").toggleClass("negrita");
            $(".CCC").removeClass("negrita");
            $(".C").slideUp("fast");
            $(".CC").removeClass("rotar");
            $(".respuesta-dos").slideToggle();
            });

        $(".abajo-tres").click(function(){
            $(this).toggleClass("rotar");
            $(".titulo").toggleClass("negrita");
            $(".DDD").removeClass("negrita");
            $(".D").slideUp("fast");
            $(".DD").removeClass("rotar");
            $(".respuesta-tres").slideToggle();
            });

        $(".abajo-cuatro").click(function(){
            $(this).toggleClass("rotar");
            $(".titulo").toggleClass("negrita");
            $(".EEE").removeClass("negrita");
            $(".E").slideUp("fast");
            $(".EE").removeClass("rotar");
            $(".respuesta-cuatro").slideToggle();
            });

        $(".abajo-cinco").click(function(){
            $(this).toggleClass("rotar");
            $(".titulo").toggleClass("negrita");
            $(".AAA").removeClass("negrita");
            $(".A").slideUp("fast");
            $(".AA").removeClass("rotar");
            $(".respuesta-cinco").slideToggle();
            });
    });
