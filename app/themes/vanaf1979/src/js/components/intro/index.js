var Utils       = require('../../components/utils/index.js');
var inView      = require('in-view');
var BigPicture  = require('bigpicture')

var intro = {

    image: null,

    init: function( )
    {
        this.image = Utils.find( '.introbigpicture' );

        if( this.image )
        {
            console.log('here');
            this.imageInview();
        }
    },

    imageInview: function( )
    {
        inView.offset(-50);

        inView('.introbigpicture').on( 'enter', ( el ) => {
            
            this.doBigpicture();

        })
    },

    doBigpicture: function()
    {
        Utils.addEvent( this.image , 'click' , ( e ) => {

            e.preventDefault();

            BigPicture({
                el: e.target,
                imgSrc: e.target.href
            })
        });
    }
}

 
module.exports = intro;
