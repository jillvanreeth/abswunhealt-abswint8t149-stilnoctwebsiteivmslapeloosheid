;var timer = (function(w, d, undefined) {

  'use strict';

  var s = {
      selectors: {
        theWrap: '.timer',
        theTime: '.timer__theTime',
      },
    },
    els = {},

    init = function() {

      if(!d.querySelectorAll(s.selectors.theWrap).length) { return false; }

      // define elements
      els.theWrap = d.querySelector(s.selectors.theWrap);
      els.theTime = d.querySelectorAll(s.selectors.theTime)[0];

      // run the time
      setInterval(function() {timeRunner(); }, 1000);
      
    },

    timeRunner = function() {

      var theDate = new Date();
      
      var hours = addZero(theDate.getHours());
      var minutes = addZero(theDate.getMinutes());
      var secs = addZero(theDate.getSeconds());
     
      var theTime = hours + ':' + minutes + ':' + secs;

      setTheTime(theTime);

      return theDate.getHours();
    },

    setTheTime = function(theTime) {
    
      els.theTime.innerHTML = theTime;
      els.theWrap.style.opacity = 1;
    
    },

    addZero = function(time) {

      time < 10 && (time = '0' + time);
   
      return time;

    };

  return {
    init:init,
    getTheTime:timeRunner
  };

}(window, window.document));

