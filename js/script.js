/*global $,owl,Placeholdem,smoothScroll,wrap_pop,niceScroll,alert*/
$(document).ready(function () {
    "use strict";

    // Trigger placeholdem.js
    Placeholdem(document.querySelectorAll('[placeholder]'));

    // Scroll Top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $(".toTop").css("right", "20px");
        } else {
            $(".toTop").css("right", "-60px");
        }
    });

    $(".toTop").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    // For Trigger Gallery-mixitup 
    $('.products-box').mixItUp();
    $('.products-head-left li').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
    });

    // for loading screen
    $(window).load(function () {
        $("body").css('overflow-y', 'auto');
        $('.page-loader').fadeOut(1000);
    });

    // customer-slider
    $(".main-slider").owlCarousel({
        navigation: false,
        slideSpeed: 500,
        singleItem: true,
        responsive: true,
        autoPlay: true,
        mouseDrag: true,
        pagination: true
    });

    //activate tooltip on tabs item 
    $('[data-toggle="tab"]').tooltip({
        trigger: 'hover',
        placement: 'top',
        animate: true,
        delay: 50,
        container: 'body'
    });

    $(".latest-slider").owlCarousel({
        navigation: false,
        slideSpeed: 200,
        responsive: true,
        autoPlay: 2000,
        pagination: true,
        items: 4,
        mouseDrag: true,
        stopOnHover: true,
        itemsCustom: [
			[0, 1],
			[450, 1],
			[600, 1],
			[700, 2],
			[1000, 3],
			[1200, 4],
			[1400, 5],
			[1600, 4]
        ]
    });

    //show mobile-nav
    $('.open-nav a').on('click', function () {
        $('.nav-list').stop();
        $('.nav-list').slideToggle();
    });

    //hide left slide nav
    $('.close-nav').on('click', function () {
        $('.st-container').removeClass('st-menu-open');
    });

    // For Nicescrool library
    $(".st-menu ul").niceScroll({
        cursorcolor: '#6a6a6a',
        cursorborderradius: '0px',
        autohidemode: false,
        cursorborder: '0bx',
        scrollspeed: 80
    });


});