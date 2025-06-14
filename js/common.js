$(document).ready(function(){
    //gnb bar
    $(document).ready(function(){
        $('.gnb>li>.gnb_wrap').mouseenter(function(){
            var barwidth=$(this).width();
            var barpos=$(this).position().left
            $('.bar').stop().animate({left:barpos,width:barwidth},500)
        })//mouseenter

        $('.gnb>li>.gnb_wrap').mouseleave(function(){
            var barwidth=$(this).width();
            var barpos=$(this).position().left
            $('.bar').stop().animate({left:barpos,width:0},500)
        })//mouseleave
    })//end

    //새로고침후 헤더영역 그대로
    function headerFixed(){
        if ($(this).scrollTop() > 0) {
            $('header').addClass('on');
            $("header .logo h1").addClass('on');
            $(".gnb > li > .gnb_wrap > a").addClass('on');
        } else {
            $("header").removeClass('on');
            $("header .logo h1").removeClass('on');
            $(".gnb > li > .gnb_wrap > a").removeClass('on');
        }
        if ($(this).scrollTop() > 50) {
            $('.topbtn').addClass('on');
        } else {
            $(".topbtn").removeClass('on');
        }
    };
    $(document).ready(function() {
        headerFixed();
        $(window).scroll(function(){
            headerFixed();
        });
    });
    var timer;
    $(window).bind('resize', headerFixed);

    //AOS
    AOS.init();

    //top 스크롤
    $('.topbtn').click(function(){
        $('html,body').animate({scrollTop:0},600)
    });//end top 스크롤

    // 스와이프 슬라이더 이미지 확대 에드클래스
    $('.swiper-slide > img').addClass('zoom');

    //main_visual
    // $('.typo>span').addClass('up'); // 키프레으로 대체

    //sub_visual
    $('.sub_visual>img').addClass('zoom')
    $('.sub_typo>span').addClass('up');

    // top menu active
	$('.sub01').siblings('header').addClass('active1');
	$('.sub02').siblings('header').addClass('active2');
	$('.sub03').siblings('header').addClass('active3');
	$('.sub04').siblings('header').addClass('active4');
    $('.sub05').siblings('header').addClass('active5');

    // image show
    $(document).ready(function(){
        new WOW().init();
    });

    // hospital_tab
    $(document).ready(function(){
        $('.h_tabcontents').hide();
        $('.h_tabcontents:eq(0)').show();
        $('.hospital_tab li a').addClass('on');
        $('.hospital_tab li a').each(function(index){
            $(this).click(function(){
                $('.h_tabcontents').hide();
                $('.h_tabcontents:eq('+index+')').show();
                $('.hospital_tab li a').removeClass('active0 active1');
                $(this).addClass('active'+index)
                $('.hospital_tab li a').removeClass('on');
                return false; /*기본 href 링크 제거 그냥 스트랩트 click 작성시 항상 넣어줗세요*/
            })//click
        })//end each
    })//end ready
})//ready end

//s_qmenu  퀵메뉴
$(document).ready(function(){
    var currentPosition = parseInt($(".q_menu").css("top"));
    $(window).scroll(function() {
        var position = $(window).scrollTop(); 
        $(".q_menu").stop().animate({"top":position+currentPosition+"px"},500);
    });
});
