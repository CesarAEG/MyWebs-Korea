$(function(){
    var mainNav = $(".main-nav > ul >  li");
    var spd = 200;
   
    mainNav.on("mouseover", function(){
        $(this).find(".sub-nav").stop(true).slideDown(spd);
    }).on("mouseout", function(){
       $(this).find(".sub-nav").stop(true).slideUp(spd);
    });

    $('.slides div:gt(0)').hide();
    setInterval(function(){
        $('.slides div:first-child').fadeOut()
        .next('div').fadeIn()
        .end().appendTo('.slides');},5000);

        $(function(){
            $('.tabmenu > li > h3').click(function(){
                $(this).parent().addClass("active").siblings().removeClass("active");
                return false;
            });
    });

    $(".notice ul li:first-child a").on("click", function(){
        $("#modal").stop(true).fadeIn(250);
    });
    $("button.cls").on("click", function(){
        $("#modal").stop(true).fadeOut(250);
    });

});