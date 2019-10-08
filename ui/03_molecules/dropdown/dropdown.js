;var dropdown = (function(w, d, undefined) {

  'use strict';

  var s = {
      selectors: {
        theWrap: '.dropdown',
        theTrigger: '.dropdown__trigger',
        theTarget: '.dropdown__target',
        theItems: '.dropdown__item',
        symbol: '.dropdown__symbol'
      },
      classes: {
        open: 'dropdown-is-open',
        selected: 'dropdown-is-selected',
      }
    },
    els = {},

    init = function() {

        if(!d.querySelectorAll(s.selectors.theWrap).length) { return false; }

        // define elements
        els.theWrap = d.querySelectorAll(s.selectors.theWrap);
        els.theTrigger = d.querySelectorAll(s.selectors.theTrigger);
        els.theTargets = d.querySelectorAll(s.selectors.theTargets);
        els.theItems = d.querySelectorAll(s.selectors.theItems);        
        
        // get the trigger
        Array.prototype.slice.call(els.theTrigger).forEach(function(theTrigger) {
          
          // bind events
          theTrigger.addEventListener('click', function(e) {
            var currentTrigger = this;
            //var theParent = currentTrigger.parentNode;
            var theParent = getParent(currentTrigger);
            toggleIt(theParent);
          });
        });

        // get the targets
        Array.prototype.slice.call(els.theItems).forEach(function(theItem) {

          // bind events
          theItem.addEventListener('click', function(e) {
            var currentItem = this;
            swapIt(currentItem);
          });
        });
    },

    swapIt = function(theItem) {
     
      var currentItem = theItem;
      var theParent = getParent(currentItem);
      
      // get the trigger / placeholder
      var thePlaceholder = theParent.querySelectorAll(s.selectors.theTrigger)[0].firstElementChild;

      // swap the contents
      thePlaceholder.innerHTML = currentItem.innerHTML;

      // hide the selected item
      currentItem.classList.add(s.classes.selected);
      
      // reset it
      resetClasses();

      // close the menu
      toggleIt(theParent);

      getPartOfDay();

    },

    getPartOfDay = function() {
      
      // get the time
      var theTime = timer.getTheTime();
      var dayPart;
      // check for timerange
      
        if(theTime > 12) {
          dayPart = 'morning';
        }
        else if(theTime <= 12 && theTime < 18) { 
          dayPart = 'noon';
        }
        else {
          dayPart = 'night';
        }

        // check the header
        header.closeHeader(function() {
          slider.findSlider(dayPart);
        });

    },

    toggleIt = function(theParent) {
     
      // toggle it
      theParent.classList.toggle(s.classes.open);

    },

    getParent = function(theChild) {
      
  //     for ( ; theChild && theChild !== document; theChild = theChild.parentNode ) {
  //   if ( theChild.matches(s.selectors.theWrap) ) return theChild;
  // }
  // return null;

  //define variables
          var theParents,
              theParentElement;

          // no params
          if(!theChild || !s.selectors.theWrap) { console.error('Missing arguments!'); return false; }

          // If no parentSelector defined will bubble up all the way to *document*
          theParents    = d.querySelectorAll(s.selectors.theWrap);
          theParents    = theParents.length ? Array.prototype.slice.call(theParents) : [];
          theParentElement = theChild.parentElement;

          // no parentElement
          if(!theParentElement) { return false; }

          // loop as long as the element is not the body or the element is not in the nodelist
          while(theParentElement && theParentElement !== d.body && theParents.indexOf(theParentElement) === -1) {
              theParentElement = theParentElement.parentElement;
          }

          return theParentElement || false;


      //return theChild.closest(s.selectors.theWrap);

    },

    resetClasses = function() {

      Array.prototype.slice.call(els.theItems).forEach(function(theItem) {
        theItem.classList.remove(s.classes.selected);
      });

    };

  return {
    init:init
  };

}(window, window.document, window.jQuery));