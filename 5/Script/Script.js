$(function(){
    var mNav = $(".main-nav > ul > li"),
        navBg = $(".nav-bg"),
        modal = $("#modal")
        popup = modal.find(".popup"),
        cls = popup.find(".cls");

    mNav.on("mouseover", function(){
        $(".sub-nav").stop(true).slideDown(200);
        navBg.stop(true).slideDown(200);
    });
    navBg.on("mouseout", function(){
        $(".sub-nav").stop(true).slideUp(200);
        navBg.stop(true).slideUp(200);
    });

    function slideShow() {
        $(".slides").animate({
            top : "-100%"
        }, 200 * 2.5, function(){
            $(".slides").css({ top : 0});
            $(".slides").append( $(".slides").find("> div").eq(0) );
        });
    }
    setInterval(slideShow, 3000);

    $(".notice ul li:nth-child(1)").on("click", function(){
        modal.stop(true).fadeIn(300);
    });
    cls.on("click", function(){
        modal.stop(true).fadeOut(300);
    });
});