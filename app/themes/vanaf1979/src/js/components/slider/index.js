var Utils = require('../../components/utils/index.js');
var inView = require('in-view');
var Swiper = require('swiper').default;

var slider = {

    swiper: null,
    slider: null,

    init: function()
    {
        this.slider = Utils.find( '.swiper-container' );

        var slides = Utils.findAll( '.swiper-slide' , this.slider );
       
        if( slides.length > 1 )
        {
            this.sliderInView();
        }
        else
        {
            console.debug( 'Slider not present on page.' );
        }
    },


    sliderInView: function()
    {
        inView.offset(-50);

        inView('.swiper-container').on( 'enter', ( el ) => {
            
            this.activateSwiper();

        }).on('exit', ( el ) => {
            
            this.deactivateSwiper();

        });
    },


    activateSwiper: function()
    {
        var pagination = Utils.find( '.swiper-pagination' , this.slider );
        pagination.classList.remove('inactive');

        var buttonNext = Utils.find( '.swiper-button-next' , this.slider );
        buttonNext.classList.remove('inactive');

        var buttonPrev = Utils.find( '.swiper-button-prev' , this.slider );
        buttonPrev.classList.remove('inactive');

        if( ! this.swiper )
        {
            this.swiper = new Swiper( this.slider , {
                slidesPerView: 1,
                spaceBetween: 0,
                grabCursor: true,
                loop: true,
                effect: "fade",
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });

            
            // Swiper Events

            this.swiper.on('init', () => {
                //console.debug( 'Slider entered the viewport and was initialized' );
            });


            this.swiper.on('slideChangeTransitionEnd', () => {
                // var currentSlide = this.swiper.slides[ this.swiper.realIndex ];
                //console.debug( 'Slider is now showwing slide nr: ' + this.swiper.realIndex );
            });


            this.swiper.on('destroy', () => {
                //console.debug( 'Slider left the viewport and was destroyed' );
            });

        }
    },


    deactivateSwiper: function()
    {
        if( this.swiper )
        {
            this.swiper.destroy( true , false );
            this.swiper = null;
        }
    }

}


module.exports = slider;

