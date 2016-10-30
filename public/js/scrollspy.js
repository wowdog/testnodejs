/**
 * Created on 2016-07-17.
 */

(function ($) {
    $.aniPage = function (e, type) {
        console.log(e.originalEvent.wheelDelta + " ");
        console.log(e.originalEvent.detail);
        console.log($(window).scrollTop()+" "); //증가값
        console.log($(window).height()); //일정값
        if (e.originalEvent.wheelDelta  > 0 || e.originalEvent.detail < 0) { //올라갈때
            if($(window).scrollTop() <= $(window).height() * 4){
                $("body, html").animate({
                    //scrollTop: $(window).scrollTop() - $(window).height()
                },200, function () {
                    $.aniOk = 0; //완료시
                    console.log("올라갈때여깄나if?")
                    if ($(window).scrollTop() <= $(window).height()) {
                        // $("#gnb >li.button:eq(0)").addClass('gnb-li-active');
                        $("#gnb >.button:not(:eq(0))").removeClass('gnb-li-active');
                    } else if ($(window).scrollTop() <= $(window).height()*2 && $(window).scrollTop() > $(window).height()) {
                        $("#gnb >.button:eq(1)").addClass('gnb-li-active');
                        $("#gnb >.button:not(:eq(1))").removeClass('gnb-li-active');
                    } else if ($(window).scrollTop() <= $(window).height() * 3 && $(window).scrollTop() > $(window).height()*2) {
                        $("#gnb >.button:eq(2)").addClass('gnb-li-active');
                        $("#gnb >.button:not(:eq(2))").removeClass('gnb-li-active');
                    } else if ($(window).scrollTop() <= $(window).height() * 4 && $(window).scrollTop() > $(window).height()*3) {
                        $("#gnb >.button:eq(3)").addClass('gnb-li-active');
                        $("#gnb >.button:not(:eq(3))").removeClass('gnb-li-active');
                    } else if ($(window).scrollTop() <= $(window).height() * 5 && $(window).scrollTop() > $(window).height()*4) {
                        $("#gnb >.button:eq(4)").addClass('gnb-li-active');
                        $("#gnb >.button:not(:eq(4))").removeClass('gnb-li-active');
                    }
                });
            }
        } else if (e.originalEvent.wheelDelta < 0 || e.originalEvent.detail < 0) {
            if($(window).scrollTop() <= $(window).height() * 5) {
                console.log("내려갈때 여깄나if?")
                $("body, html").animate({
                    //scrollTop: $(window).scrollTop() + $(window).height()
                }, 200, function () {
                    $.aniOk = 0;
                    if ($(window).scrollTop() == "0") {
                        //$("#gnb >li.button:eq(0)").addClass('gnb-li-active');
                        $("#gnb >.button:not(:eq(0))").removeClass('gnb-li-active');
                    } else if ($(window).scrollTop() >= $(window).height() && $(window).scrollTop() < $(window).height() * 2) {
                        $("#gnb >.button:eq(1)").addClass('gnb-li-active');
                        $("#gnb >.button:not(:eq(1))").removeClass('gnb-li-active');
                    } else if ($(window).scrollTop() >= $(window).height() * 2 && $(window).scrollTop() < $(window).height()*3) {
                        $("#gnb >.button:eq(2)").addClass('gnb-li-active');
                        $("#gnb >.button:not(:eq(2))").removeClass('gnb-li-active');
                    } else if ($(window).scrollTop() >= $(window).height() * 3 && $(window).scrollTop() < $(window).height()*4) {
                        $("#gnb >.button:eq(3)").addClass('gnb-li-active');
                        $("#gnb >.button:not(:eq(3))").removeClass('gnb-li-active');
                    } else if ($(window).scrollTop() >= $(window).height() * 4 && $(window).scrollTop() < $(window).height()*5) {
                        $("#gnb >.button:eq(4)").addClass('gnb-li-active');
                        $("#gnb >.button:not(:eq(4))").removeClass('gnb-li-active');
                    }
                });
            }
        }
    };
})(jQuery);

var changeFn = null;

var i=null;

$(function () {
    changeFn = function () {
        $("#gnb >.button").removeClass('gnb-li-active');
        $(".contents").height($(window).height());
            $.aniOk = 0;
        } //함수 정의:널대신 들어감

    changeFn(); //함수생성하여 메모리에 넣음
});

$(document).on("mousewheel DOMMouseScroll", function (e) {

     $.aniPage(e, e.type); //생성

});



// 클릭시 이벤트
$("#gnb >li.button > a").click(function (e) {
    e.preventDefault(); //나만의 속성으로 처리
    var index = $(this).parent().index();
    $("#gnb >.button:eq(" + index + ")").addClass('gnb-li-active');
    $("#gnb >.button:not(:eq(" + index + "))").removeClass('gnb-li-active');
    $("body, html").animate({
        scrollTop: $(window).height() * index
    }, 200, function () {
        $.aniOk = 0;
    });
    //    $(this).blur();
});

$("li.button > a").click(function (e) {
    e.preventDefault(); //나만의 속성으로 처리
    var index = $(this).parent().index();
    $("#gnb >.button:eq(" + index + ")").addClass('gnb-li-active');
    $("#gnb >.button:not(:eq(" + index + "))").removeClass('gnb-li-active');
    $("body, html").animate({
        scrollTop: $(window).height() * index
    }, 200, function () {
        $.aniOk = 0;
    });
    //     $(this).blur();
});
$(".skip_nav > a").click(function (e) {
    e.preventDefault(); //나만의 속성으로 처리
    var index = 1;
    $("#gnb >.button:eq(" + index + ")").addClass('gnb-li-active');
    $("#gnb >.button:not(:eq(" + index + "))").removeClass('gnb-li-active');
    $("body, html").animate({
        scrollTop: $(window).height() * index
    }, 200, function () {
        $.aniOk = 0;
    });
})


$(window).on('resize', function (e) { //창변화시키면 변화
    e.preventDefault();
    var index=$(this).index();
    console.log("여기: " + index);
    changeFn(); //호출
    console.log('값: ' + $.aniOk);
    
    // $("#gnb >.button:eq(" + index + ")").addClass('gnb-li-active');
    $("#gnb >.button:not(:eq(" + index + "))").removeClass('gnb-li-active');
    $("body, html").animate({
        scrollTop:$(window).height() * index
    }, 200, function () {
        $.aniOk = 0;
    });
    $(this).blur();

});

