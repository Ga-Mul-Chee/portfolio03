$(document).ready(function(){
    $(".section01 ul li:gt(0)").hide();
    setInterval(function(){$(".section01 ul li:first").fadeOut(2000).next().fadeIn(2000).end().appendTo(".section01 ul");},2500);
});