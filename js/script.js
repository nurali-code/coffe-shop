
$('.btn_menu').on('click', function () {
    $('.nav, .btn_menu, body').toggleClass('is_active');
})
$('.nav__link').on('click', function () {
    $('.nav, .btn_menu, body').removeClass('is_active');
})


$(window).scroll(function () {
    if ($(this).scrollTop() > 100) { $('.header').addClass('fixed'); }
    else { $('.header').removeClass('fixed'); }
    if ($(this).scrollTop() > 300) { $('.sroll_up').fadeIn(); }
    else { $('.sroll_up').fadeOut(); }
});

$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 80, }, 300,)
});

$('.menu-slider').slick({
    arrows: true,
    infinite: true,
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slideToScroll: 1,
    centerPadding: '0px',
    centerMode: true,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                // centerPadding: '15px',
                centerMode: true,
                infinite: true,
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerPadding: '7.5px',
                centerMode: true,
                infinite: true,
            }
        }
    ]
});
$('.interior-slider').slick({
    arrows: true,
    infinite: true,
    dots: false,
    speed: 300,
    slidesToShow: 2,
    centerPadding: '0px',
    // centerMode: true,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerPadding: '15px',
                infinite: true,
            }
        }
    ]
});
