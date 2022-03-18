$(function(){

    //Navigation

    var mainNav = $(".main-nav > ul > li");
    
        mainNav.on("mouseover", function(){
            $(this).find(".sub-nav").stop().slideDown(250);
        });
        mainNav.on("mouseout", function(){
            $(this).find(".sub-nav").stop().slideUp(250);
        });

    //Slideshow R-L
     

        function slideShow (){
            $(".slides").animate({
                left : -100 + "%"
            }, 500, function(){
                $(this).css({ left : 0 });
                $(this).append( $(this).find(">div").eq(0));
            });
        }
        setInterval(slideShow, 5000);

    //Tabmenu

    $(function(){
        $(".tabmenu > li > h3").click(function(){
            $(this).parent().addClass("active").siblings().removeClass("active");
            return false;
        });
    });

    //Modal

    $(".notice ul li:first-child a").on("click", function(){
        $("#modal").stop(true).fadeIn(250);
    });
    $("button.cls").on("click", function(){
        $("#modal").stop(true).fadeOut(250);
    });

});