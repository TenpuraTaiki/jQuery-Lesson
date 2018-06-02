$(function () { 
    $('.box1').fadeIn(3000, function () { 
        $('.box1').css({
            'background-color': 'blue',
            'height': '100px'
        });
        $('.box1').fadeOut(3000);
    });
 });
