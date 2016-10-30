
$(document).ready(function() {
    // ===info슬라이드===
    $("#section2 > dl > dd").click(function(){
        $("#section2 > dl, #section2 > img, #section2 > h2").fadeOut(200);
        // $("#section2").height($(window).height(".info_modal"));
        $(".info_modal").slideDown(600);
    })
    $(".close").click(function() {
        $(".info_modal").slideUp(200);
        // $("#section2").height($(window).height());
        $("#section2 > img, #section2 > dl, #section2 > h2").fadeIn(600);
    })
    // console.log($(window).width());
    if($(window).height()<=835 && $(window).width()>=1000){
        $(".info_table .li_head.first").click(function(){
            $(".info_table.first").find("p").slideToggle(600);
        });
        $(".info_table .li_head.second").click(function(){
            $(".info_table.second").find("p").slideToggle(600);
        });
        $(".info_table .li_head.third").click(function(){
            $(".info_table.third").find("p").slideToggle(600);
        });
    }
    else if($(window).width()<1000){
        $(".info_table .li_head").click(function(){
            $(this).parent().find("p").slideToggle(600);
            $(this).parent().siblings().find("p").css("display","none");
        });
    }

    //section3
    //첫번째 이미지에 클릭효과
    $("#zoomin01").click(function () {
        $(this).parent().siblings("#modal01").css("display", "block");
    });
    $("#zoomin02").click(function () {
        $(this).parent().siblings("#modal02").css("display", "block");
    });
    $("#zoomin03").click(function () {
        $(this).parent().siblings("#modal03").css("display", "block");
    });

    $(document).click(function (e) {
        if ($(e.target).is("#wrap *")) {
            e.preventDefault();//이게 라디오 버튼 문제 발생
            if (!$(e.target).is("#modal01 *,#modal02 *,#modal03 *, #zoomin01, #zoomin02, #zoomin03, #modalImg01, #modalImg02, #modalImg03")) {

                $("#modal01").hide(0);
                $("#modal02").hide(0);
                $("#modal03").hide(0);

                if ($(e.target).is('[src*=p3_car2]')) {
                    $("#zoomin01").hide(0);
                    $("#zoomin02").hide(0);
                    $("#zoomin03").hide(0);
                } else if ($(e.target).is('[src*=p3_car1]')) {
                    $("#zoomin01").show(0);
                    $("#zoomin02").show(0);
                    $("#zoomin03").show(0);
                }
            }
            else if ($(e.target).is(".close")) {
                $("#modal01").hide(0);
                $("#modal02").hide(0);
                $("#modal03").hide(0);
            }
        }
        else if ($(e.target).is(".close")) {
            $("#myModal").hide(0);
        }
    });
    
});