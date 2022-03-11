$(function(){
    var mainNav = $(".main-nav > ul > li"),
        navBg = $(".bg");

    mainNav.on("mouseover", function(){
        $(".sub-nav").stop(true).slideDown(350);
        navBg.stop(true).slideDown(350);
    });
    $("#header").on("mouseout", function(){
        $(".sub-nav").stop(true).slideUp(350);
        navBg.stop(true).slideUp(350);
    });

    function slideShow(){
        $(".slides").animate({
            top : "-100%"
        }, 200 * 2.5, function(){
            $(".slides").css({ top : 0});
            $(".slides").append($(".slides").find("> div").eq(0) );
        });
    }
    setInterval(slideShow, 5000);
    
    $(".notice ul li:first-child a").on("click", function(){
        $("#modal").stop(true).fadeIn(350);
    });
    $("button.cls").on("click", function(){
        $("#modal").stop(true).fadeOut(350);
    });

});