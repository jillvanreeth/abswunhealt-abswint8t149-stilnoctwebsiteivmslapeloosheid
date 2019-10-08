(function(w, d) {

	"use strict";

	var init = function() {
		
		w.timer.init();
		w.slider.init();
		w.header.init();
		w.dropdown.init();

	},

	loaded = function() {

		

	};

	d.addEventListener('DOMContentLoaded', init);
	w.addEventListener('load', loaded);

}(window, window.document));