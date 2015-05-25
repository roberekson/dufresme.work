(function($) {
	
	$(document).ready(function() {
		
		// Handle disabled anchors
		$('a[disabled]').on('click', function(event) {
			event.preventDefault();
		});
		
	});
	
})(jQuery);