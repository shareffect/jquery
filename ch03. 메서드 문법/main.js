// 매개변수가 없는 유형 :  getter

// 같은 메서드 인데, 미개변수가 몇개인지에 따라서 역할이 달라요.

$(document).ready(function(){

    let text = $('h1').html();
    console.log(text);

    $('h1').html("title tag");

    $('h1').css('color','red');  // css 는 무조건 2개가 와야 하는 메서드.

    $('h1').html(function(index,text){
        text = '제목태그';
        return text + (index+1);
    })

    $('h1').css({
        backgroundColor: "red",  // 여기서는 하이폰 안쓰고 카멜
        color: "yellow",
    });

    // 메서드 체이닝. 자바스크립트는 안되는데 제이쿼리는 되는 것. 앞에서부터 순서대로 처리한다.

    $('h1').first().css("background-color","black");


});


