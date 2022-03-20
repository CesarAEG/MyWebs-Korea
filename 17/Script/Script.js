$(function(){

    //NAV

    var mainNav = $(".main-nav > ul > li ");
        mainNav.mouseover(function(){
            $(".sub-nav").stop(true).slideDown(250);
            $(".nav-bg").stop(true).slideDown(200);
        });
        mainNav.mouseout(function(){
            $(".sub-nav").stop(true).slideUp(250);
            $(".nav-bg").stop(true).slideUp(300);
        });

    //Modal

    $(".notice > ul > li:first a").click(function(){
        $("#modal").stop(true).fadeIn(250);
    });
    $(".cls").click(function(){
        $("#modal").stop(true).fadeOut(250);
    });

    //Slide

    setInterval(function(){
        $(".slides").animate({top:"-100%"},500 , function(){
            $(".slides").css({top:0});
            $(".slides").append($(".slides").find("div").eq(0));
        });
    }, 3500);


});