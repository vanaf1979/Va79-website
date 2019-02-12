var utils       = require('../../components/utils/index.js');
var Swiper = require('Swiper').default;

var slider = {

    init: function( ) {

        console.log('slide');

        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            // effect: 'fade',
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

    }
}

 
module.exports = slider;
