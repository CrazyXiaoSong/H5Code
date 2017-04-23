/**
 * Created by Lemon on 2017/3/25.
 */

$(window).scroll(function() {
    var num = $(document).scrollTop();
    if(num>700){
        $(".footer-content").css("zIndex",10);
        $('.goTop').css("bottom","40px");
    }else {
        $(".footer-content").css("zIndex",1);
        $('.goTop').css("bottom","-50px");
    }
    if(num <100){
        $('.main-carousel').css('-webkit-filter', "blur(0px)");
    }else if(num<200){
        $('.main-carousel').css({webkitFilter:"blur("+10/7+"px)"})
    }else if(num<300){
        $('.main-carousel').css({webkitFilter:"blur("+10/7*2+"px)"})
    }else if(num<400){
        $('.main-carousel').css({webkitFilter:"blur("+10/7*3+"px)"})
    }else if(num<500){
        $('.main-carousel').css({webkitFilter:"blur("+10/7*4+"px)"})
    }else if(num<600){
        $('.main-carousel').css({webkitFilter:"blur("+10/7*4+"px)"})
    }else if(num<700){
        $('.main-carousel').css({webkitFilter:"blur("+10/7*4+"px)"})
    }else {
        $('.main-carousel').css({webkitFilter:"blur("+10/7*4+"px)"})
    }
    $('.menu').removeClass('open-menu');
    $('.menu-list').css({height:0});
    menuTimes=1;
});

//到达顶部事件
$(".goTop").click(function () {
    $('body').animate({ scrollTop: 0 }, 200);
});

$(window).resize(function () {
    $('.carousel').css("height",$(window).height());
});

//手机端菜单点击事件
var menuTimes = 1;
$('.menu').click(function () {
    if(menuTimes){
        $('.menu-list').css({height:1000});
        $(this).addClass('open-menu');
        menuTimes=0;
    }else {
        $('.menu-list').css({height:0});
        $(this).removeClass('open-menu');
        menuTimes=1;
    }

});

//轮播事件
var switchNum = 1;
var carousel = setInterval(function () {
    if(switchNum == 1){
        $('.main-carousel').css("marginLeft","-100%");
    }else if(switchNum == 2){
        $('.main-carousel').css("marginLeft","-200%");
    }else {
        $('.main-carousel').css("marginLeft","0");
    }
    $('.main-carousel').children('li').removeClass("active");
    $('.main-carousel').children('li').eq(switchNum).addClass("active");
    $('.carousel-dot').children('i').removeClass("active");
    $('.carousel-dot').children('i').eq(switchNum).addClass("active");
    switchNum++;
    if(switchNum>=3){
        switchNum = 0;
    }

},3000);
$('.carousel-content').hover(function () {
    clearInterval(carousel);
});
$('.carousel-content').mouseleave(function () {
    carousel = setInterval(function () {
        if(switchNum == 1){
            $('.main-carousel').css("marginLeft","-100%");
        }else if(switchNum == 2){
            $('.main-carousel').css("marginLeft","-200%");
        }else {
            $('.main-carousel').css("marginLeft","0");
        }
        $('.main-carousel').children('li').removeClass("active");
        $('.main-carousel').children('li').eq(switchNum).addClass("active");
        $('.carousel-dot').children('i').removeClass("active");
        $('.carousel-dot').children('i').eq(switchNum).addClass("active");
        switchNum++;
        if(switchNum>=3){
            switchNum = 0;
        }

    },5000);
});

console.log(123);
function bindingImg(dom,num) {
    console.log(13);
    $('.carousel-dot').children('i').removeClass("active");
    $(dom).addClass("active");
    switchNum = num;
    $('.main-carousel').children('li').removeClass("active");
    $('.main-carousel').children('li').eq(switchNum).addClass("active");
    if(switchNum == 1){
        $('.main-carousel').css("marginLeft","-100%");
    }else if(switchNum == 2){
        $('.main-carousel').css("marginLeft","-200%");
    }else if(switchNum == 0){
        $('.main-carousel').css("marginLeft","0");
    }
}




