// DOM이 로드된 뒤 적용
$(function () {

    // 상단 메뉴
    $(window).on('scroll', function () {

        // 변수에 스크롤한 량을 담는다.
        let sct = $(window).scrollTop();
        console.log(sct);
        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    })

    // 메인 슬라이드
    $('.mainSlide').slick({
        arrows: false,
        dots: true,
        // fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
    });

    $('.mainVisual .dots li').on('mouseenter', function () {
        //내가 클릭한 요소의 번호를 알려줘.....
        let idx = $(this).index();
        console.log(idx);
        // 내가 숫자 도트 버튼을 누르면 해당 숫자 슬라이드 화면을 이동시켜줘
        $('.mainSlide').slick('slickGoTo', idx, true);
    });


    // 메인 슬라이드 왼쪽 화살표
    $('.mainVisual .arrows .left').on('click', function () {
        $('.mainSlide').slick('slickPrev')
    });
    // 메인 슬라이드 오른쪽 화살표
    $('.mainVisual .arrows .right').on('click', function () {
        $('.mainSlide').slick('slickNext')
    });

    // 슬라이드 이름 저장
    const model = ['SONATA The Edge', 'The all-new KONA Electric', 'IONIQ 6', ' CASPER']

    // 슬라이드 일어났을 때 애니메이션 작동하는 것 
    $('.mainSlide').on('init afterChange', function (e, s, c) {
        let _this = $(this).find('.slick-current');
        _this.addClass('on').siblings().removeClass('on');


        // 이름 나오게 하기
        $('.mainVisual .model.prev').text(c ? model[(c - 1) % model.length] : model[1]);
        $('.mainVisual .model.next').text(c ? model[(c + 1) % model.length] : model[1]);
    });

    // 이름 클릭 시 슬라이드
    $('.mainVisual .model.prev').on('click', function () {
        $('.mainSlide').slick('slickPrev');
    })
    $('.mainVisual .model.next').on('click', function () {
        $('.mainSlide').slick('slickNext');
    })


    // 슬라이드 재생/정지 버튼 작동
    var btn = true;
    $('.btnPause').click(function () {
        if (btn == true) {
            $(this).addClass('on');
            $('.mainSlide').slick('slickPause')
            btn = false;
        } else {
            $(this).removeClass('on');
            $('.mainSlide').slick('slickPlay')
            btn = true;
        }
    });


    // 제품 슬라이드
    $('.productSlide').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        // 이미지 수가 하나 더 많아야 돌아감
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    // 제품 슬라이드 이전 버튼
    $('.product .productArrows .left').on('click', function () {
        $('.productSlide').slick('slickPrev')

    });

    // 제품 슬라이드 다음 버튼
    $('.product .productArrows .right').on('click', function () {
        $('.productSlide').slick('slickNext')
    });


    // 하단 배너
    $('.downBanner .btn').on('click', function () {
        $('.downBanner').toggleClass('on')
    });

    // 밑에 내려갔을 때 버튼 누르면 스크롤 올라가는 기능
    $('.toTop').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500)
    })


});
