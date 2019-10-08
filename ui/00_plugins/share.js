;var share = (function(w, d, $, undefined) {

	'use strict';

    var s = {},
        els = {},
        body = $(d.body),
        init = function() {
					
					//define elements
					els.share = $('.share__trigger');

					//bind events
					els.share.off('click').on('click', getType);

				},

				getType = function() {
				
					var url = $(this).attr('href');

					popIt(url);

					return false;
				},

				popIt = function(url,type) {

					var width  = 575,
						height = 400,
						left   = ($(window).width() / 2),
						top    = ($(window).height() - height) /2,
						url    = url,
						opts   = 'status=1' +
								 ',width='  + width  +
								 ',height=' + height +
								 ',top='    + top    +
								 ',left='   + left;

						window.open(url, type, opts);

				};

	w.addEventListener('load', init);

  return {};

}(window, window.document, window.jQuery));