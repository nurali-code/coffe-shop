
$('.btn_menu').on('click', function () {
    $('#nav, .btn_menu, body').toggleClass('is_active');
})

$('.menu-slider').slick({
    arrows: true,
    infinite: true,
    dots: false,
    speed: 500,
    slidesToShow: 1,
    centerPadding: '0px',
    centerMode: true,
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
