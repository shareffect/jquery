$(document).ready(function(){

    let result1 = $('.area1').width();
    let result2 = $('.area1').innerWidth();
    let result3 = $('.area1').outerWidth();
    let result4 = $('.area1').outerWidth(true);

    $('.w1').html(result1);
    $('.w2').html(result2);
    $('.w3').html(result3);
    $('.w4').html(result4);


    let result5 = $('.area2').width();
    let result6 = $('.area2').innerWidth();
    let result7 = $('.area2').outerWidth();
    let result8 = $('.area2').outerWidth(true);

    $('.w5').html(result5);
    $('.w6').html(result6);
    $('.w7').html(result7);
    $('.w8').html(result8);

    let getWidth = $(".area3").width();
    $('.getWidth').html(getWidth);

    $('.area3').click(function(){
        $('.area3').width(300);
        $('.area3').height(300);

        let getWidth = $('.area3').width();
        $('.getWidth').html(getWidth);

    })



});