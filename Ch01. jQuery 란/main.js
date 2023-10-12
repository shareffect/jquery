//https://developers.google.com/speed/libraries?hi=ko&hl=ko#jquery

/*
$(document).ready(function(){});
$(function(){});
$(window).on('load',function(){});
*/

$(document).ready(function(){
 $("h1").css("color","red");
});

$(window).on("load", function () {
 
    let h = $("img").height();
    $(".load").html(h);

});

