$(document).ready(function(){

// $('h1:first').css('color','red');

$('h1').first().css('color','red');

$('h1').last().css('color','red');

$('h1').even().css('background','pink');

$('h1').odd().css('background','lightblue');

$('h1').eq(2).css('text-decoration','underline');

$('h1').filter('.second').css('font-weight','normal');

$('h1').not(".second").css('font-style',"italic");

$('h1').add('h5').css('font-size',40);


});

// 선택자 even을 쓰던, 선택자.even 을 쓰던 기능은 똑같음