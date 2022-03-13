$(function(){

    //Navigation
    var navBg = $(".nav-bg");

    $(".main-nav > ul > li").mouseover(function(){
        $(this).find(".sub-nav").stop().slideDown(250);
        // navBg.stop(true).slideDown(250);
    }).mouseout(function(){
        $(this).find(".sub-nav").stop().slideUp(250);
        // navBg.stop(true).slideUp(250);
    });

    //Slideshow
    function slideShow (){
        $(".slides").animate({
            left : -100 + "%"
        }, 500, function(){
            $(this).css({ left : 0 });
            $(this).append( $(this).find(">div").eq(0) );
        });
    }
    setInterval(slideShow, 3000)

    //Modal
    $(".notice ul li:first-child a").on("click", function(){
        $("#modal").stop(true).fadeIn(250);
    });
    $("button.cls").on("click", function(){
        $("#modal").stop(true).fadeOut(250);
    });

});