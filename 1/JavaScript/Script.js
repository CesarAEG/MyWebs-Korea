$(function(){
    // Navigator
    var $navi = $(".navi ul > li");
    
    // /*Metodo 1*/
    // $navi.on("mouseover", function(){
    //         $(this).find(".sub-navi").stop(true).animate({ height : 120 + "px"}, 300);
    // }).on("mouseout", function(){
    //         $(this).find(".sub-navi").stop(true).animate({ height : 0 + "px"}, 300);
    // });
    
    /*Metodo 2*/
    $navi.on("mouseover", function(){
        $(this).find(".sub-navi").stop(true).slideDown(300);
    }).on("mouseout", function(){
        $(this).find(".sub-navi").stop(true).slideUp(300);
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

    /* Fade */
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
});

