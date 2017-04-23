/**
 * Created by aa on 2017/1/13.
 */
//手机端和平板端左上角按钮效果
var menuSwitch = false;
$(function () { $("[data-toggle='popover']").popover(); });

$('.menuBtn').click(function() {
    if (menuSwitch == false) {
        $('.headerStyle-xs').css('height',600);
        $('.willHidden').hide();
        menuSwitch = true
    }else{
        $('.headerStyle-xs').css('height',0);
        $('.willHidden').show();
        menuSwitch = false
    }
});

//购物车效果
$('#shoppingCart').popover({
    animation:true,
    html:true,
    placement:'bottom',
    title:'您的购物车还未添加商品',
    trigger:'click',
    content:'<span style="font-size: 70px;margin-top: 20px; color: grey" class="glyphicon glyphicon-shopping-cart"></span>'

});


//触碰商品只显示查看详情

$('.details').hover(function(){
    money = $(this).children('.price').html();
    $(this).css({height:'100%'});
    $(this).children('.price').css({height:28}).html('<button class="price-btn">查看详情</button>');
},function(){

    $(this).children('.price').html(money)
});

//触摸显示查看详情和加入购物车
$('.goShopping').hover(function(){
    shoppingMoney = $(this).children('.price').html();
    $(this).css({height:'100%'});
    $(this).children('.price').css({height:28}).html('<button class="price-btn">查看详情</button><button class="price-btn goshopping">加入购物车</button>');
},function(){
    $(this).children('.price').html(shoppingMoney)
});
//售罄的商品
$('.sellOut').hover(function(){
    sellOutMoney =  $(this).children('.price').html();
    $(this).css({height:'100%'});
    $(this).children('.price').css({height:28}).html('<button class="price-btn">查看详情</button><button class="price-btn sellOutMoney disabled">已售罄</button>');
},function(){
    $(this).children('.price').html(sellOutMoney)
});
//滚动监听
$("body").scrollspy({
    target: "#scroller"
});

//快速到达顶部按钮显示隐藏判断
$('#scroller').on('activate.bs.scrollspy', function () {
    var $condition = $('#myScroller').children('li').eq(2).attr('class');
    var $conditionM = $('#myScroller').children('li').eq(3).attr('class');
    /*if(){
        $('.back-top').addClass('active')
    }else{
        $('.back-top').removeClass('active')
    }*/
    if($condition =='active'||$conditionM =='active'){
        $('.back-top').addClass('active')
    }else{
        $('.back-top').removeClass('active')
    }


});

//到达顶部事件以及动画
$(".back-top").click(function() {
    TweenMax.to(window, 0.5, {scrollTo:0});
});

/*//鼠标覆盖小圆点更改图片事件
var changeColorCondition = true;
$('.otherColor').click(function(){
    if(changeColorCondition){
    var oldColor = $(this).parents('li').eq(0).children('img').attr('src');
    var newColor = $(this).parents('li').eq(0).children('img').attr('ng-src');
    $(this).parents('li').eq(0).children('img').attr('src',newColor);
    $(this).parents('li').eq(0).children('img').attr('ng-src',oldColor);
        $(this).parents('p').eq(0).children('span').css({
            display: 'inline-block',
            width: 10,
            height: 10,
            overflow: 'hidden',
            borderRadius: 10,
            marginLeft: 10,
            marginRight: 10,
            padding: 2,
            verticalAlign: 'middle',
            cursor: 'pointer',
            opacity: 0.8
        });
        $(this).css({opacity: 1,width: 15,height: 15})
    }
    changeColorCondition = false;
});
$('.oldColor').click(function(){
    if(!changeColorCondition){
        var oldColor = $(this).parents('li').eq(0).children('img').attr('src');
        var newColor = $(this).parents('li').eq(0).children('img').attr('ng-src');
        $(this).parents('li').eq(0).children('img').attr('src',newColor);
        $(this).parents('li').eq(0).children('img').attr('ng-src',oldColor);
            $(this).parents('p').eq(0).children('span').css({
                display: 'inline-block',
                width: 10,
                height: 10,
                overflow: 'hidden',
                borderRadius: 10,
                marginLeft: 10,
                marginRight: 10,
                padding: 2,
                verticalAlign: 'middle',
                cursor: 'pointer',
                opacity: 0.8
            });
            $(this).css({opacity: 1,width: 15,height: 15})
    }
    changeColorCondition = true;
});*/

/*
var app = angular.module('changeImgApp',[]);
app.controller('changeImg',['$scope',function($scope){
    $scope.changeImg = function(obj){
        console.log(this);
        $(this).parents('li').children("img").attr('src','12313')
    }
}]);
*/

angular.module('myApp',[]).controller('changeImg',['$scope',function($scope){
    $scope.toggleImg = function(isShow){
        $scope.changeMyImg = isShow;
    };
    $scope.toggleImg2 = function(isShow2){
        $scope.changeMyImg2 = isShow2
    }
}]);


$('.colorSelection').children('span').click(function(){
    $(this).parent('.colorSelection').children().css({
        display: 'inline-block',
        width: 10,
        height: 10,
        overflow: 'hidden',
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
        padding: 2,
        verticalAlign: 'middle',
        cursor: 'pointer',
        opacity: 0.8});
    $(this).css({opacity: 1,width: 15,height: 15})
});


//图片轮播
var imgIndex = 1;
function imgCarousel(){
    if(imgIndex % 2 == 0){
        $('#firstCarouselImg').attr('src','images/slide2.png');
        $('#allDot li').removeClass();
        $('#allDot li:last-child').attr('class','active');
    }else{
        $('#firstCarouselImg').attr('src','images/slide1.png');
        $('#allDot li').removeClass();
        $('#allDot li:first-child').attr('class','active');
    }
    imgIndex++;
}
var startLoop = setInterval(imgCarousel,3000);
$('#firstCarouselImg').mouseover(function(){
    clearInterval(startLoop);
}).mouseleave(function(){
    startLoop = setInterval(imgCarousel,3000);
});

$('#allDot li:first-child').click(function(){
    $('#firstCarouselImg').attr('src','images/slide1.png');
    imgIndex = 1;

});
$('#allDot li:last-child').click(function(){
    $('#firstCarouselImg').attr('src','images/slide2.png');
    imgIndex = 2;

});

$('#allDot li:first-child').attr('class','active');


$('#allDot li').click(function(){
    $('#allDot li').removeClass();
    $(this).attr('class','active');
})
















