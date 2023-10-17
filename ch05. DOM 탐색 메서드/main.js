$(document).ready(function(){

    $('.prt').parents().css({
        padding: 20,
        border: '3px solid black',
    });


    $('.prt').parents('div').css('border-color','red');

    $('.prt').parent().css('border-color','blue');

    $('.prt').parentsUntil('body').css('border-style','dashed');


    $('.chd').children().css('color','red');

    $('.chd').children('p').css('text-decoration','underline');

    $('.fnd').click(function(){
        $(this).find('> h3').css('background','pink');
        $(this).find('li').css('background','lightblue');

    });



    $('.bro').siblings().css('font-size',15);

    $('.bro').siblings('h6').css('font-style','italic');

    $('.bro').next().css('text-decoration','underline');

    $('.bro').prev().css('text-decoration','underline');

    $('.bro').nextAll().css('color','red');
    $('.bro').prevAll().css('color','blue');

    $('.bro').nextUntil('h6').css('background','yellow');

    $('.bro').prevUntil('h1').css('background','orange');



    $('.bro').find('+ h4').html('제목태그@@');
    $('.bro').find('~ h5').html('제목태그^^');

});