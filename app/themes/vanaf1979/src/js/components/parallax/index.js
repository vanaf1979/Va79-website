var Utils       = require('../../components/utils/index.js');
var inView      = require('in-view');
var jarallax    = require('jarallax')

var intro = {

    parallax: null,

    init: function( )
    {
        this.parallax = Utils.find( '.home-graphic' );

        if( this.parallax )
        {
            this.parallaxInview();
        }
    },

    parallaxInview: function( )
    {
        inView.offset(-50);

        inView('.home-graphic').on( 'enter', ( el ) => {
            
            this.doParallax();

        })
    },

    doParallax: function()
    {
        jarallax.jarallax( this.parallax , {
            speed: 0.2
        });
    }
}

 
module.exports = intro;
