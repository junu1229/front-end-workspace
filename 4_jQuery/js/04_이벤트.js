// 1. 이벤트 연결
// 1) on, off
// $('#area1').on('mouseenter', function(){
//     // 마우스가 올라갔을 때
//     // 배경색상 : beige, 텍스트는 : 마우스가 올라감
//     $('#area1').css({
//         'background-color': 'beige'
//     }).text('마우스가 올라감');
// });
// $('#area1').on('mouseleave', function(){
//     // 마우스가 올라갔을 때
//     // 배경색상 : beige, 텍스트는 : 마우스가 올라감
//     $('#area1').css({
//         'background-color': 'hotpink'
//     }).text('마우스가 내려감');
// });

// $('#area1').on('mouseenter mouseleave', function(e){
//     console.log(e.type);
//     if(e.type === 'mouseenter') {
//         $('#area1').css({
//             'background-color': 'beige'
//         }).text('마우스가 올라감');
//     } else if(e.type === 'mouseleave') {
//         $('#area1').css({
//             'background-color': 'hotpink'
//         }).text('마우스가 내려감');

//     }
// });

// $('#area1').on('click', function(){
//     // 배경색은 white, 텍스트는 ''
//     $('#area1').css({
//         'background-color': 'white'
//     }).text('').off('mouseenter mouseleave');
// });
$('#area1').on({
    mouseenter:function(e){
        $('#area1').css({
            'background-color': 'beige'
        }).text('마우스가 올라감');
    },
    mouseleave:function(e){
        $('#area1').css({
            'background-color': 'hotpink'
        }).text('마우스가 내려감');
    },
    click:function(e){
        $('#area1').css({
            'background-color': 'white'
        }).text('').off('mouseenter mouseleave');
    }
});

// 2) one

$('#area2').one('click', function(){
    alert('실행!');
});

// 2. 키보드 이벤트
// 1) keydown, keypress, keyup
// keydown : 키보드가 눌려질 때
// $('#textarea1').keydown(function(e){
//     console.log(`keydown / e.key : ${e.key}, e.keycode ${e.keycode}`);
// })
// // keypress : 글자가 입력될 때
// $('#textarea1').keypress(function(e){
//     console.log(`keypress / e.key : ${e.key}, e.keycode ${e.keycode}`);
// })
// $('#textarea1').keyup(function(e){
//     console.log(`keyup / e.key : ${e.key}, e.keycode ${e.keycode}`);
// })

$('#textarea1').on({
    keydown: function(e){
        console.log(`keydown / e.key : ${e.key}, e.keycode ${e.keycode}`);
    },
    keypress: function(e){
        console.log(`keypress / e.key : ${e.key}, e.keycode ${e.keycode}`);
    },
    keyup: function(e){
        console.log(`keyup / e.key : ${e.key}, e.keycode ${e.keycode}`);
    }
})


$('#textarea2').on({
    keyup: function(e){
        var count = $('#textarea2').val().length;
        var maxcount = parseInt($('#maxLength').text());
        if(count>= maxcount){
            $('#textarea2').val($('#textarea2').val().substring(0,maxcount));
        }
        $('#counter').text(count);
    }
});