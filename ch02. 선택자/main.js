// 객체선택 방식

/*
Element 관련 선택자

*               : $('*') 
element         : $('h1)
#id             : $('#text')
.class          : $('.text')
[속성="값"]     : $('input[type=text]')
A > B           : $('div > ul')
A B             : $('div ul')
A + B           : $('h1 + h2') 
A ~ B           : $('h1 ~ h2')
:not            : $('h1:not(.text)')        제외

1부터 시작

:nth-child(n)   : $('div:nth-child(n)')
:first-child    : $('div:first-child')
:last-child     : $('div:last-child')
:nth-child(odd) : $('div:nth-child(odd)')
:nth-child(even): $('div:nth-child(even)')


array. 배열의 개념이라 0부터 시작
:eq(n)
:first
:last
:odd
:even
:gt(n)      : $('div:gt(n)')
:lt(n)      : $('div:lt(n)')


  ** 실제 업무에서는 배열 선택자로 다 씁니다.  기본 선택자는 잘 못봤습니다.

*/


$(document).ready(function(){
    $("*").css("font-size",20);

    $('h3').css("text-decoration","underline");

    $('#text01').css('color','red');

    $('.odd').css("color","pink");

    $('.even').css("color","lightblue");

    $('p[name=name1').css('color','blue');

    $('p[name=name2').css('color','green');


    $('.list > li').css('font-weight','bold');

    $('body .listA').css('font-style','italic');

    $('.listA + li').css('color','red');

    $('.listA ~ li').css('text-decoration','underline');

    $('.list > li:not(.listA)').css('list-style','none');


    $('div:eq(0)').css('background','black');
    $('div:eq(1)').css('background','orange');
    $('div:eq(2)').css('background','yellow');
    $('div:eq(3)').css('background','green');
    $('div:eq(4)').css('background','blue');
    $('div:eq(5)').css('background','navy');
    $('div:eq(6)').css('background','purple');


    $('div:first').css('border-radius',"10px 0 0 10px")
    $('div:last').css('border-radius',"0  10px 10px 0")

    $("div:odd").css("color","white");
    $("div:even").css("color","gray");


    $('div:gt(3)').css('text-decoration','underline');
    $('div:lt(3)').css('text-decoration','italic');

    $('input:text').css('border',"1px solid red");
    $('input:password').css('border','1px solid blue');


   });

// 개발자도구에서    콘솔에서 선택자 잘 선택되는지 애초에 테스트 해 보면 좋음 





// input 관련 선택자 


/*

:input          : $('*:input')
:text           : $('input:text')  ** input 만 예외로, [type=] 이런거 없이 바로 속성값으로 접근 가능. input만 됨.
:password       : $('input:password')
:radio          : $('input:radio')
:checkbox       : $('input:checkbox')
:submit         : $('input:submit')
:reset          : $('input:reset')
:butten         : $('input:button')
:file           : $('input:file')
:enabled        : $('input:enabled')
:disabled       : $('input:disabled')
:selected       : $('input:selected')
:checked        : $('input:checked')


*/