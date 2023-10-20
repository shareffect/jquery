$(document).ready(function(){

    $('h2').hover( function(){
        $(this).addClass('active');
    },
    function() {
        $(this).removeClass('active');
    })


    $('h1').click(function(){
        $(this).toggleClass('active');
    })

    let color = $('h3').css('color');
    console.log(color)

    $('h3').css('color','blue');

    $('h3').css({
        backgroundColor: 'yellow',
        textDecoration: 'underline',
    });

    $('h3').css('font-size',function(index){
        return(index +1) * 20;
    });

    // 파라 미터 이름을 index 라고 안하고 aa 이렇게 하더라도, aa 는 index 를 의미한다.


    let c = ['red', 'green', 'blue'];
    $('h1').css({
        backgroundColor: 'black',
        color: function(index){
            return c[index];
        }
    });

    // css 에서 입힐 css 가져다가 입력하고,  html로 인라인style을 바로 쓰는 경우는 드물다. 


});