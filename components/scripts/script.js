// Template for this file
//
// Create a namespace for the site specific javascript.
/* A namespace for the site's javascript,
 * so we don't pollute the global namespace
 * and we avoid conflicts.
 *
 * Change wellcome to whatever the name of the project.
 */

/** @namespace */
var wellcome = wellcome || {};

(function ($) {
  "use strict"; //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

  // Decreases headline padding in case there is no subnav
  wellcome.sayhello = function() {
  	console.log('this works');
  };

 //Group methods to call on document ready
 wellcome.init = function () {
    //Call methods here.
   wellcome.sayhello();
  };
}(jQuery));

// kick everything off on document ready
jQuery(document).ready(function ($) {
  "use strict";
  wellcome.init();
});
