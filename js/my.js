$(".info").hide();
$(".one").hover(
    function () {
        $(".info").hide();
        $(".one:not('#" + $(this).attr("id") + "')").stop().animate({ width: "12.5%" }, 499);
        $(this).stop().animate({ width: "50%" }, 500, function(){
            $(this).find(".info").slideDown(500);
        });
    }, function () {
        $(".info").hide();
        $(this).stop().animate({ width: "20%" }, 499);
        $(".one:not('#" + $(this).attr("id") + "')").stop().animate({ width: "20%" }, 500);

    });