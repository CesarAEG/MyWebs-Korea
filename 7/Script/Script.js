$(function(){
    var mainNav = $(".main-nav > ul > li"),
        navBg = $(".nav-bg");
        
        mainNav.on("mouseover", function(){
            $(".sub-nav").stop(true).slideDown(250);
            navBg.stop(true).slideDown(250);
        });
        $("#header").on("mouseout", function(){
            $(".sub-nav").stop(true).slideUp(250);
            navBg.stop(true).slideUp(250);
        });

        function slideShow (){
            $(".slides").animate({
                left : -100 + "%"
            }, 500, function(){
                $(this).css({ left : 0 });
                $(this).append( $(this).find(">div").eq(0) );
            });
        }
        setInterval(slideShow, 7000);

        $(".notice ul li:first-child a").on("click", function(){
            $("#modal").stop(true).fadeIn(250);
        });
        $("button.cls").on("click", function(){
            $("#modal").stop(true).fadeOut(250);
        });

});