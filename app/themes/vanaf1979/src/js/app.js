
/* Import utilities. */
var utils = require('./components/utils/index.js');
var slider = require('./components/slider/index.js');
var intro = require('./components/intro/index.js');


/* Import components. */
var scriptLoaders = require('./components/scriptloaders/index.js');


/* Initialize components. */
utils.domready( () => {

    // Load external scripts and styles.
    scriptLoaders.init();

    slider.init();

    intro.init();

})