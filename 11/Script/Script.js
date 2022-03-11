$(function(){
    var mainNav = $(".main-nav > ul > li");
        
        mainNav.on("mouseover", function(){
            $(".sub-nav").stop(true).slideDown(250);
        });
        $("#header").on("mouseout", function(){
            $(".sub-nav").stop(true).slideUp(250);
        });

        function slideShow (){
            $(".slides").animate({
                left : -100 + "%"
            }, 500, function(){
                $(this).css({ left : 0 });
                $(this).append( $(this).find(">div").eq(0) );
            });
        }
        setInterval(slideShow, 3000);

    
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