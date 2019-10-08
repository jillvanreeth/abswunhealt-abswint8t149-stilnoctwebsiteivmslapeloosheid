;var slider = (function(w, d, $, undefined) {

  'use strict';

  var s = {
      selectors: {
      	theWrap: '.slider',
        theSlider: '.slider__inner',
        nextArrow: '.slider__button--right',
        prevArrow: '.slider__button--left',
      },
      times: {
        morning: 'morning',
        noon: 'noon',
        night: 'night',
      },
    },
    els = {},

    init = function() {

    	if(!$(s.selectors.theSlider).length) { return false; }

    	// define elements
    	els.theWrap = $(s.selectors.theWrap);
    	els.theSliders = els.theWrap.find(s.selectors.theSlider)
    	els.nextArrow = $(s.selectors.nextArrow);
    	els.prevArrow = $(s.selectors.prevArrow);

      slickIt();
      
    },

    slickIt = function() {

    	$(els.theWrap).each(function(index) {

    		var currentSlider = $(this).find(els.theSliders);
    		var currentNextArrow = $(this).find(els.nextArrow);
    		var currentPrevArrow = $(this).find(els.prevArrow);
	
    		$(currentSlider).slick({
	        centerMode: true,
	        adaptiveHeight: true,
				  nextArrow: currentNextArrow,
				  prevArrow: currentPrevArrow,
	  			slidesToShow: 3, 
	  			variableWidth: true,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                centerMode: false,
                slidesToShow: 1,
                variableWidth: false,
              }
            },
          ]
	      });

    	});
	    
    },

    findSlider = function(dayPart) {
    
      var destinationSlider;

      $(els.theWrap).each(function() {
        dayPart === $(this).data('slider') && (destinationSlider = $(this));
      });
      
      scrollToSlider(destinationSlider);

    },

    scrollToSlider = function(theSlider) {

      var extraHeight = $('.header').height() > 0 ? 120 : 0;

      $('html, body').animate({
          scrollTop: theSlider.offset().top - extraHeight
        }, 1000);
      

    };
 
  return {
    init:init,
    findSlider:findSlider    

  };

}(window, window.document, window.jQuery));