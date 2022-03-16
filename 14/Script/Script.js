$(function(){

    //Navigation

    var mainNav = $(".main-nav > ul > li"),
        navBg = $(".nav-bg");

        mainNav.on("mouseover", function(){
            $(".sub-nav").stop(true).slideDown(250);
            navBg.stop(true).slideDown(250);
        });
        mainNav.on("mouseout", function(){
            $(".sub-nav").stop(true).slideUp(250);
            navBg.stop(true).slideUp(250);
        });

    //Slideshow

    $(".slides div:gt(0)").hide();
    setInterval(function(){
        $(".slides div:first-child").fadeOut()
        .next("div").fadeIn()
        .end().appendTo(".slides");},5000);

    //Modal

    $(".notice ul li:first-child a").on("click", function(){
        $("#modal").stop(true).fadeIn(250);
    });
    $("button.cls").on("click", function(){
        $("#modal").stop(true).fadeOut(250);
    });

});