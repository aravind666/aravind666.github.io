/**
 * Created by aravind on 15/7/14.
 */

// IIFE - Immediately Invoked Function Expression
(function(myroutines) {

    // The global jQuery object is passed as a parameter
    myroutines(window.jQuery, window, document);

}(function($, window, document) {

    $(function() {

        console.log('The DOM is ready and do things which you need to do');
        $(document).foundation();
        var doc = document.documentElement;
        doc.setAttribute('data-useragent', navigator.userAgent);


        var $containter = $('#container');
        $containter.imagesLoaded( function(){
            $containter.masonry({
                itemSelector: '.box',
                isAnimated: !Modernizr.csstransitions,
                isFitWidth: true
            });
        });

        $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });

    });

    console.log('The DOM may not be ready');


}));
