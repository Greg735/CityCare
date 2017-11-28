(function ($, Drupal, drupalSettings) {
'use strict';
// Start JS code Here

	$('#navbar').affix({
	      offset: {
	        top: $('.logo-center').height()
	      }
	}); 

	if($('div.hidden').length){
		$('div.hidden').each(function(){
			var imageURI = $(this).text();
			$(this).next().css('background-image', 'url('+imageURI+')');
		});
	}






// End JS code here
})(jQuery, Drupal, drupalSettings);