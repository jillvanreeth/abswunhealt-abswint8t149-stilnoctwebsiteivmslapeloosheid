;var smoothScroll = (function(w, d, $, undefined) {

    'use strict';

    var s = {},
        els = {},
        body = $(d.body),
        init = function() {

        	// define settings
        	s.speed = 500;

        	$('a[href*=\\#]').on('click', onTriggerClick);
        },

        onTriggerClick = function(e) {
         
        	// prevent url from updating
			e.preventDefault();

			var target = $(this).attr('href').split('#');

			scrollIt(target[1]);
        },

        scrollIt = function(target) {

        	if(target && $('#' + target).length) {
			
                var extraHeight = $('.header').height() > 0 ? 120 : 0;

				$('html, body').stop().animate({
					scrollTop: ($('#' + target).offset().top) - extraHeight
				}, s.speed);

				return false;
			}
        }

    w.addEventListener('load', init);

    return {};

}(window, window.document, window.jQuery));