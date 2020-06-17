$(function() {

    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="./img/arrows-left.svg"></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="./img/arrows-right.svg"></img>',
        asNavFor: '.slider-dotsHead'
    });

    $('.slider-dotsHead').slick({
        asNavFor: '.header__slider',
        arrows: false,
        slidesToShow: 4,
    });

    $('.surf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="./img/arrows-left.svg"></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="./img/arrows-right.svg"></img>',
        asNavFor: '.slider-map',
    });

    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf-slider',
        focusOnSelect: true
    });

    $('.travel__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="./img/arrows-left.svg"></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="./img/arrows-right.svg"></img>',
    })


});