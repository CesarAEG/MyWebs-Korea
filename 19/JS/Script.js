$(function(){

    //NAV

    var mainNav = $(".main-nav > ul > li");
        mainNav.mouseover(function(){
            $(this).find(".sub-nav").stop(true).slideDown(250);
        });
        mainNav.mouseout(function(){
            $(this).find(".sub-nav").stop(true).slideUp(250);
        });

    //Slide

    setInterval(function(){
        $(".slides div:gt(0)").hide();
        $(".slides div:first").fadeOut().next("div").fadeIn().end().appendTo(".slides");
    }, 3000);

    //Tab

    $(".tabmenu > li > h3").click(function(){
        $(this).parent().addClass("active").siblings().removeClass("active");
        return false;
    });

    //Modal

    $(".notice ul li:first a").click(function(){
        $("#modal").stop(true).fadeIn(250);
    });
    $(".cls").click(function(){
        $("#modal").stop(true).fadeOut(250);
    });

});