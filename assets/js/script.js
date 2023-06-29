$(function(){

    var myFullpage = new fullpage('#fullpage', {
        navigation: true,
        navigationPosition: 'right',
        responsiveWidth: 1000,
        responsiveHeight: 644,
        onLeave: function(anchorLink, index){
                if(index.index  == 0){
                    $(".header").removeClass("blue");
                    $("#fp-nav").removeClass("blue");
                    $("#btn_top").css("opacity","0");
                }else{		
                    $("#btn_top").css("opacity","1");
                }
                if(index.index == 1){
                    $(".header").removeClass("blue");
                    $("#fp-nav").removeClass("blue");
                }
                if(index.index == 2){
                    $(".header").addClass("blue");
                    $("#fp-nav").addClass("blue");
                }
                if(index.index == 3){
                    $(".header").addClass("blue");
                    $("#fp-nav").addClass("blue");
                }
                if(index.index == 4){
                    $(".header").addClass("blue");
                    $("#fp-nav").addClass("blue");		
                    $("#btn_top").css("opacity","1");
                    $("#scroll").fadeOut();
                }else{
                    
                    $("#scroll").css("opacity","1");
                }
			
		},
        afterResize: function(width, height){
            if (height <= 664) {
                fullpage_api.destroy('all');
            } else {
                fullpage_api.destroy('all');
            }
        }
        
    });


    $('.menu-all').click(function(){
        $(this).toggleClass('all-close');
        $('.all-nav').toggleClass('on');
        $('.header').removeClass('blue');
    })

    $('.all-nav .title').click(function(e){
        e.preventDefault();
        $(this).siblings('.sub-list').slideToggle('active');
    })


    // $(window).scroll(function(){
    //     curr = $(this).scrollTop();
    //     section = $('.sc-full3').offset().top;

    //     if (curr >= section) {
    //         $('.header').addClass('blue');
    //         $('#fp-nav').addClass('blue');
    //     } else {
    //         $('.header').removeClass('blue');
    //         $('#fp-nav').removeClass('blue');
    //     }
    // })


    $('.gnb-item').hover(function(){
        $(this).find('.sub').addClass('active');
        $('.header .bg').stop().slideDown();
        $('.header').addClass('sub-active');
    },function(){
        $(this).find('.sub').removeClass('active');
        $('.header .bg').stop().slideUp();
        $('.header').removeClass('sub-active');
    })



	const media = new Swiper('.media-swiper', {
		spaceBetween: 40,
		slidesPerView: 'auto',
		speed: 1500,
		loop: true,
        loopAdditionalSlides : 1,// 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
        autoplay: false,
        breakpoints:{
            812:{
                slidesPerView: 2.5,
            },
            1399:{
                // slidesPerView: 2.5,
            }
        }
	});


    


    $('.btn-top').click(function(){
        window.scrollTo({top:0,behavior:"smooth"})
    })





});