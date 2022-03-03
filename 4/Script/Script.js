// $(function(){
//     var mainNav = $(".main-nav > ul > li");
//     var spd = 200;
//     var $modal = $("#modal");
//     var pu = $modal.find(".popup");
//     var pImage = $(".partner-image a");

//     mainNav.on("mouseover", function(){
//         $(this).find(".sub-nav").stop(true).slideDown(spd);
//     }).on("mouseout", function(){
//         $(this).find(".sub-nav").stop(true).slideUp(spd);
//     });

//     function slideShow(){
//         $(".slides").animate({
//             left : -100 + "%"
//         }, 500, function(){
//             $(this).css({left : 0});
//             $(this).append($(".slides").find("img").eq(0) );
//         });
//     }
//     setInterval(slideShow, 2000);

//     pImage.on("click", function(e){
//         e.preventDefault();
//         var pSrc = $(this).find("img").attr("src");
//         var pAlt = $(this).find("img").attr("alt");
//         pu.find("img").attr({src : pSrc, alt = pAlt});
//         $modal.stop(true).fadeIn(spd);
//     });
//     $(".cls").on("click", function(){
//         $modal.stop(true).fadeOut(spd);
//     });
// });

$(function(){
    var mainNav = $(".main-nav > ul >  li");
    var spd = 200;
    var $modal = $("#modal");
    var pu = $modal.find(".popup");
    var pImage = $(".partner-image a");
   
    mainNav.on("mouseover", function(){
        $(this).find(".sub-nav").stop(true).slideDown(spd);
    }).on("mouseout", function(){
       $(this).find(".sub-nav").stop(true).slideUp(spd);
    });

    function slideShow(){
        $(".slides").animate({
            left : -100 + "%"
        }, 500, function(){
            $(this).css({left : 0});
            $(this).append($(".slides").find("img").eq(0) );
        });
    }
    setInterval(slideShow, 2000);

    pImage.on("click", function(e){
        e.preventDefault();
        var pSrc = $(this).find("img").attr("src");
        var pAlt = $(this).find("img").attr("alt");
        pu.find("img").attr({src : pSrc, alt : pAlt});
        $modal.stop(true).fadenIn(spd);
       });
   $(".cls").on("click", function(){
       $modal.stop(true).fadeOut(spd);
   });
});