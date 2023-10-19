// 바로 다음으로 추가//

// remove 는 다시 살릴 수가 없고,
// display none 은 살릴 수가 있다.

// 보안상 좋지 않다. 


$(document).ready(function(){
    // 동적으로 문서객체 생성
    
    let newobj = $('<div>');
    newobj.attr("class","obj2");
  

    //
    $('.btn1').click(function(){
        $('.box').append(newobj);
    })

    $('.btn2').click(function(){
        $('.box').prepend(newobj);
    })

//

    $('.btn3').click(function () {
        $('.box').after(newobj);
    })

    $('.btn4').click(function () {
        $('.box').before(newobj);
    })


//
    $('.btn5').click(function(){
        $('.obj1').first().clone().appendTo(".box");
    })

    $('.btn6').click(function(){
        $('.box').remove();
    })

    $('.btn7').click(function(){
        $('.box').empty();
    })    

})





