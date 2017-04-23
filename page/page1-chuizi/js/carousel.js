/**
 * Created by aa on 2017/1/5.
 */
var x1 = document.getElementsByClassName("lunbo")[0].offsetLeft;
var y1 = document.getElementsByClassName("lunbo")[0].offsetTop;
var x2;
var index = 0;

window.onload = function() {
    timer = setInterval(auto, 3000);
};

function auto() {
    index++;
    var q=index%2;
    if(q==0){
        $(".lunbo1").fadeIn();
        $(".lunbo2").fadeOut();
    }else{
        $(".lunbo2").fadeIn();
        $(".lunbo1").fadeOut();
    }

}
$(".yuanchange2").click(function(){

    $(".lunbo1").fadeIn();
    $(".lunbo2").fadeOut();
});
$(".yuanchange1").click(function(){

    $(".lunbo2").fadeIn();
    $(".lunbo1").fadeOut();
});

function show() {
    $(".tu1").attr("src", imgarr[index][0]);
    $(".tu2").attr("src", imgarr[index][1]);
    $(".tu3").attr("src", imgarr[index][2]);
}

$(".lunbo").mousemove(function(e) {
    check(e);

});

function check(e) {
    var a = e ? e : window.event;
    x2 = e.offsetLeft - x1;
    y2 = e.clientY - y1;
    var LorR = x2 - 610;
    var RorL = y2 - 250;
    var x3 = x1 + 610 - e.clientX;
    var y3 = y1 + 250 - e.clientY;
    if(LorR >= 0) {
        if(RorL >= 0) {
            $(".erji").css("left", -(-x3 / 1220 * 10) + "px");
            $(".beijing").css("transform", "perspective(3000px)rotateX(" + y2 / 500 * 8 + "deg)rotateY(" + -(-x2 / 1220 * 8) + "deg)");
            $(".phone").css("transform", "perspective(3000px)rotateX(" + y2 / 500 * 8 + "deg)rotateY(" + -(-x2 / 1220 * 9) + "deg)");
            $(".erji").css("transform", "perspective(3000px)rotateX(" + y2 / 500 * 8 + "deg)rotateY(" + -(-x2 / 1220 * 8) + "deg)");
        }

    } else {

        $(".erji").css("left", -(x3 / 1220 * 10) + "px");
        $(".beijing").css("transform", "perspective(3000px)rotateX(" + (y3 / 500 * 8) + "deg)rotateY(" + -x3 / 1220 * 8 + "deg)")
        $(".phone").css("transform", "perspective(3000px)rotateX(" + (y3 / 500 * 8) + "deg)rotateY(" + -x3 / 1220 * 9 + "deg)")
        $(".erji").css("transform", "perspective(3000px)rotateX(" + (y3 / 500 * 8) + "deg)rotateY(" + -x3 / 1220 * 8 + "deg)");

    }

}