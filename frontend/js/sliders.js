jQuery(function($) {
    // arrow icons
    var arrowLeft = '<i class="demo-icon icon-arrow"></i>';
    var arrowRight = '<i class="demo-icon icon-arrow"></i>';

    // preset options
    var heroSlider = $('.js-hero-slider');
    var heroOption = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        autoplay: true,
        arrows: false,
        dots: false,
        fade: true,
        swipeToSlide: true,
        //accessibility: false // prevent page scroll up on autoplay
    };


    // init slider
    heroSlider.slick(heroOption);


}); // ready