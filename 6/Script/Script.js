jQuery(document).ready(function(){

    var modal = $("#modal")
        popup = modal.find(".popup"),
        cls = popup.find(".cls");

    $(".navi>li").mouseover(function(){
        $(this).find(".sub-nav").stop().slideDown(800);
    }).mouseout(function(){
        $(this).find(".sub-nav").stop().slideUp(800);
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

    $(function(){
        $(".c3>li>a").click(function(){
            $(this).parent().addClass("active1").siblings().removeClass("active1");
            return false;
        });
    });

    $(".c1>ul>li:nth-child(1)").on("click", function(){
        modal.stop(true).fadeIn(300);
    });
    cls.on("click", function(){
        modal.stop(true).fadeOut(300);
    });

});