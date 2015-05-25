(function($) {
	
	$(document).on('ready', function() {
		$('a[href="#"]').on('click', function(event) {
			event.preventDefault();
		});
	});
	
})(jQuery);