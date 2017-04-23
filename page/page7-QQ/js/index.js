/**
 * Created by Lemon on 2017/3/29.
 */
window.onscroll = function () {
    var scrollTop = document.body.scrollTop;
    console.log(scrollTop);
    if(scrollTop>=800){
        document.getElementsByClassName('header')[0].style.position = "fixed";
        document.getElementsByClassName('header')[0].style.background = "#fff";
    }else {
        document.getElementsByClassName('header')[0].style.position = "absolute";
        document.getElementsByClassName('header')[0].style.background = "none";
    }
    var positionY1 = scrollTop*-1/30+30;
    document.getElementsByClassName('bgImg')[0].style.backgroundPositionY = positionY1+"px";

    var positionY2 = scrollTop*-1/20+100.1;
    document.getElementsByClassName('bgImg2')[0].style.backgroundPositionY = positionY2+"px";

    var positionY3 = scrollTop*-1/10+170.3;
    document.getElementsByClassName('bgImg3')[0].style.backgroundPositionY = positionY2+"px";
    if(scrollTop>3284){
       // document.getElementsByClassName('pic1')[0].addClass('active1');
       document.getElementsByClassName('pic1')[0].setAttribute('class',"pic1 active1");
       document.getElementsByClassName('pic2')[0].setAttribute('class',"pic2 active2");
       document.getElementsByClassName('pic3')[0].setAttribute('class',"pic3 active3");
    }else {
        document.getElementsByClassName('pic1')[0].setAttribute('class',"pic1");
        document.getElementsByClassName('pic2')[0].setAttribute('class',"pic2");
        document.getElementsByClassName('pic3')[0].setAttribute('class',"pic3");
    }
};
var switchNum = 2;
var carousel = setInterval(function () {
    if(switchNum%2){
        document.getElementsByClassName('warp-circle')[0].setAttribute('class','warp-circle active');
        document.getElementsByClassName('warp-circle')[1].setAttribute('class','warp-circle');
        document.getElementsByClassName('warp-item')[1].setAttribute('class','warp-item item2');
        document.getElementsByClassName('warp-item')[0].setAttribute('class','warp-item item1 active');
        switchNum++;
    }else {
        document.getElementsByClassName('warp-circle')[1].setAttribute('class','warp-circle active');
        document.getElementsByClassName('warp-circle')[0].setAttribute('class','warp-circle');
        document.getElementsByClassName('warp-item')[0].setAttribute('class','warp-item item1');
        document.getElementsByClassName('warp-item')[1].setAttribute('class','warp-item item2 active');
        switchNum++;
    }
},5000);
document.getElementsByClassName('warp')[0].onmouseover = function () {
    clearInterval(carousel);
};
document.getElementsByClassName('warp')[0].onmouseout = function () {
    carousel = setInterval(function () {
        if(switchNum%2){
            document.getElementsByClassName('warp-circle')[0].setAttribute('class','warp-circle active');
            document.getElementsByClassName('warp-circle')[1].setAttribute('class','warp-circle');
            document.getElementsByClassName('warp-item')[1].setAttribute('class','warp-item item2');
            document.getElementsByClassName('warp-item')[0].setAttribute('class','warp-item item1 active');
            switchNum++;
        }else {
            document.getElementsByClassName('warp-circle')[1].setAttribute('class','warp-circle active');
            document.getElementsByClassName('warp-circle')[0].setAttribute('class','warp-circle');
            document.getElementsByClassName('warp-item')[0].setAttribute('class','warp-item item1');
            document.getElementsByClassName('warp-item')[1].setAttribute('class','warp-item item2 active');
            switchNum++;
        }
    },5000);
};

document.getElementsByClassName('warp-circle')[0].onclick = function () {
    document.getElementsByClassName('warp-circle')[0].setAttribute('class','warp-circle active');
    document.getElementsByClassName('warp-circle')[1].setAttribute('class','warp-circle');
    document.getElementsByClassName('warp-item')[1].setAttribute('class','warp-item item2');
    document.getElementsByClassName('warp-item')[0].setAttribute('class','warp-item item1 active');
    switchNum = 2;
};
document.getElementsByClassName('warp-circle')[1].onclick = function () {
    document.getElementsByClassName('warp-circle')[1].setAttribute('class','warp-circle active');
    document.getElementsByClassName('warp-circle')[0].setAttribute('class','warp-circle');
    document.getElementsByClassName('warp-item')[0].setAttribute('class','warp-item item1');
    document.getElementsByClassName('warp-item')[1].setAttribute('class','warp-item item2 active');
    switchNum = 1;
};

