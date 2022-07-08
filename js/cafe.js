$(function () {
    // $('.mainSlide').slick({
    //     autoplay: true,
    //     arrows: false,
    //     pauseOnHover: false,
    //     pauseOnFocus: false,
    // });

    $('.newMenuSlide').slick({
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '337px',
    });

    $('.event .slideArrow i:nth-child(1)').on('click', function () {
        $('.eventSlide').slick('slickPrev');
    });

    $('.event .slideArrow i:nth-child(2)').on('click', function () {
        $('.eventSlide').slick('slickNext');
    });

    $('.eventSlide').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
    });
})

