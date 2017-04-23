/**
 * Created by Lemon on 2017/3/5.
 */
//fullPage初始化
$(function () {
    /*初始化fullPage*/
    $("#fullPage").fullpage({
        /*给每一个section区域设置背景颜色*/
        sectionsColor: ["", "yellow", "hotpink", "orange"],
        /*滚动速度，单位为毫秒  默认700*/
        scrollingSpeed: 700,
        /*是否显示项目导航    默认false*/
        navigation: true,
        /*navigationPosition  默认right*/
//            navigationPosition: "left",
        /*是否显示左右滑块的项目导航 默认false*/
//            slidesNavigation: true,
        /*左右滑块的箭头的背景颜色  默认#fff*/
//            controlArrowColor: "red",
        /*左右滑块是否循环滑动  默认为true*/
//            loopHorizontal: false,
        /*是否循环滚动，与 loopTop 及 loopBottom 不兼容  默认为false*/
//            continuousVertical:true,
        afterLoad: function (anchorLink, index) {
            if(index == 1){
                $('.loginBtn').css({display:'none'});
            }else {
                $('.loginBtn').css({display:'block'});
            }
            if (index == 2) {
                $('.page2 .words').css({
                    opacity: '1',
                });
                $('.page2 .bigBg').css({
                    'transform':'scale(1,1)'
                })
            }
            if (index == 3) {
                $('.bg-center .down').css({
                    'top': '300px', 'left': '12%'
                });
                $('.bg-center .up').css({
                    'top': '-100px', 'left': '0'
                });
                $('.bg-center .words').css({
                    opacity: '1',
                });
            }
            if (index == 4) {
                $('.bg-center2 .words').css({
                    opacity:'1'
                });
                $('.bg-center2 .bg-img').css({
                    transform:'scale(1.1,1.1)'
                });
            }
            if(index == 5){
                $('.bg-center3 .words').css({
                    opacity:'1'
                });
                $('.nextPage').css({
                    display:'block'
                })
            }
            if(index == 6){
                $('.bg-center4 .words').css({
                    opacity:'1'
                });
                $('.bg-center4 .bg-img').css({
                    transform: 'scale(1,1)'
                });
                $('.nextPage').css({
                    display:'block'
                })
            }
            if(index == 7){
                $('.nextPage').css({display:'none'});
            }
        },
        onLeave: function (index, direction) {
            if (index == '6' && direction ==7) {
                $('.nextPage').css({display:'none'});
            }
            if(index == 7){
                $('.nextPage').css({
                    display:'block'
                })
            }
        }
    });
});

//nextPage按钮事件
$('.nextPage').click(function () {
    let bodyClass = $('body').attr('class');
    if(typeof bodyClass == 'undefined' || bodyClass == 'fp-viewing-0'){
        $('#fp-nav a').eq(1).click();
    }else if(bodyClass == 'fp-viewing-1'){
        $('#fp-nav a').eq(2).click();
    }else if(bodyClass == 'fp-viewing-2'){
        $('#fp-nav a').eq(3).click();
    }else if(bodyClass == 'fp-viewing-3'){
        $('#fp-nav a').eq(4).click();
    }else if(bodyClass == 'fp-viewing-4'){
        $('#fp-nav a').eq(5).click();
    }else if(bodyClass == 'fp-viewing-5'){
        $('#fp-nav a').eq(6).click();
    }
});

//downlist
$('.header .mainNav .laymid .menu ul li').click(function () {
    console.log(456)
    $('.header .mainNav .laymid .menu ul li .downlist').css({
        display:'none'
    });
    // console.log($(this).find('.downlist'));
    $(this).find('.downlist').css({
        display:'block'
    })
});
$('.my-close').click(function () {
    $(this).parents('.downlist').css({
        display:'none'
    });
    // $('.header .mainNav .laymid .menu ul li .downlist').css({
    //     display:'none'
    // });
    return false;
});



