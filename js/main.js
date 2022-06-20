//푸터 .sub_co_list > li
$('.sub_co_list > li').mouseenter(function(){
    $(this).addClass('active');
})
.mouseleave(function(){
    $(this).removeClass('active');
});


//각 section의 위에서부터의 거리를 알아온다.
var pos = []; //변수 pos는 배열.

for(var i = 1; i < 7; i++){
    pos.push( $(`#section${i}`).offset().top);
};
console.log(pos);


$(window).scroll(function(){
    var scrollH = $(window).scrollTop(); //스크롤 된 거리를 변수에
    $('.s_num').text(scrollH); // 스크롤 된 거리를 화면에 나오게

    //스크롤 시 리모트 버튼 색상 변화(클라스 삽입)
    if(scrollH < pos[1]){
        $('#remote a').removeClass('active');
        $('#remote a').eq(0).addClass('active'); //0과 같은 순서의 버튼a(첫번째 a)
    } else if (scrollH >= pos[1] && scrollH < pos[2]) {
        $('#remote a').removeClass('active');
        $('#remote a').eq(1).addClass('active');
    } else if (scrollH >= pos[2] && scrollH < pos[3]) {
        $('#remote a').removeClass('active');
        $('#remote a').eq(2).addClass('active');
    } else if (scrollH >= pos[3] && scrollH < pos[4]) {
        $('#remote a').removeClass('active');
        $('#remote a').eq(3).addClass('active');
    } else if (scrollH >= pos[4] && scrollH < pos[5]) {
        $('#remote a').removeClass('active');
        $('#remote a').eq(4).addClass('active');
    } else {
        $('#remote a').removeClass('active');
        $('#remote a').eq(5).addClass('active');
    }
});

$('#remote a').on('click',function(e){
    e.preventDefault(); //a태그의 기본역할 안하게
    var ttt = this.hash; //클릭한 #(해시) 값을 변수에 넣는다
    console.log(ttt);

    var thisSecH = $(ttt).offset().top; //클릭한 section이 위에서부터 얼마나 떨어져 있는지 알아온다
    $('html,body').animate({scrollTop:thisSecH},500,'swing');
});

//각 section안에 있는 btnDown버튼을 누르면 하나 아래의 section으로 화면 이동
$('section .btnDown').on('click',function(){
    var aa = $(this).parents('section').index();
    console.log(`지금 클릭한 ${aa} 번째`);
    $('html,body').animate({scrollTop:pos[aa+1]},500,'swing');
});


/*
a.push.(b) - b를 a배열의 끝에 배열값으로 추가
a.index() -  몇번째 a인지 알아온다. (0부터 시작)
*/