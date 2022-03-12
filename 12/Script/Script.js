$(function(){
    var $navi = $(".main-menu ul > li");

    //Nav
    $navi.on("mouseover", function(){
        $(this).find(".sub-menu").stop(true).slideDown(300);
    }).on("mouseout", function(){
        $(this).find(".sub-menu").stop(true).slideUp(300);
    });
    
    //Slide
    $(".slides").each(function(){
        var fades = $(this).find("> div");
        var fcount = fades.length;
        var countIndex = 0;
        
        fades.eq(countIndex).fadeIn();
        function fadeAct() {
            var nextIndex = (countIndex + 1) % fcount;
            fades.eq(countIndex).fadeOut();
            fades.eq(nextIndex).fadeIn();
            countIndex = nextIndex;
        };
        setInterval(fadeAct, 3000);
    });

    // PopUp
    var popup = $("#modal");
    var cls = $(".cls");
            
    $(".notice ul li:first-child").on("click", function(){
        popup.stop(true).fadeIn();
    });
    cls.on("click", function(){
        popup.stop(true).fadeOut();
    });

    //Tab
    $(function(){
        $('.tabmenu > li > h3').click(function(){
            $(this).parent().addClass("active").siblings().removeClass("active");
            return false;
        });
    });

});