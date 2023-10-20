// 자바스크립트에서는 이벤트가 메서드로 있지는 않는데,
// jQuery 에서는 이벤트를 메서도르 제공

// addeventlistener() 를 on() 으로 쓴다는.

$(document).ready(function(){
    $('h2').on('click',function(){
        $(this).toggleClass('active');
    });

    $('a').on('focus mouseenter',function(){
        $(this).addClass('active');
    });

    $('a').on('blur mouseleave',function(){
        $(this).removeClass('active');
    });

    $('h3').on({
        mouseenter: function(){
            $(this).addClass('active');
        },
        mouseleave: function(){
            $(this).removeClass('active');
        }
    });

    $('h2').one('click',function(){
        alert("클릭이 한번만 적용됨")
    });

    $('button').dblclick(function(){
        alert('더블클릭')
    });

    $('p').hover(function(){
        $(this).css('font-size',50);
    }, function(){
        $(this).css('font-size',20)
    });

    $('span').click(function(){
        $(this).html(function(index, text){
            return text + "*"
        });
    });


    setTimeout(function(){
        $('span').last().trigger('click');
    },1000);





});     