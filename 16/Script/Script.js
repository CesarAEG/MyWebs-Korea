$(function(){

    //Navigation

    var mainNav = $(".main-nav > ul > li");

        mainNav.mouseover(function(){
            $(this).find(".sub-nav").stop().slideDown(250);
        });
        mainNav.mouseout(function(){
            $(this).find(".sub-nav").stop().slideUp(250);
        });

    //Slideshow

        function slideShow() {
            $(".slides").animate({ top : "-100%" }, 200 * 2.5, function(){
                $(".slides").css({ top : 0});
                $(".slides").append( $(".slides").find("> div").eq(0) );
            });
        }
        setInterval(slideShow, 7000);

    //Tabmenu

        $(".tabmenu > li > h3").click(function(){
            $(this).parent().addClass("active").siblings().removeClass("active");
            return false;
        });

    //Modal

        $(".notice ul li:first-child a").click(function(){
            $("#modal").stop(true).fadeIn(250);
        });
        $("button.cls").click(function(){
            $("#modal").stop(true).fadeOut(250);
        });

});