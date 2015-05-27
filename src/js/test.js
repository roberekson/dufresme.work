(function($) {
	
	$(document).on('ready', function() {
		
		$('a[href="#"]').on('click', function(event) {
			event.preventDefault();
		});
		
		$('.example').not('[data-no-html]').each(function() {
			var $elm = $(this);
			var $elmCopy = $elm.clone();
			$elmCopy.find('[data-replace]').replaceWith('...');
			$elm.append('<div class="code-sample">' + ($('<div />').text($elmCopy.html().trim().replace(/\t/g, '  ')).html()) + '</div>');
		});
		
		$('.code-sample').each(function() {
			$(this).html($(this).html().replace(/([[a-z]+=)"/gi, '<span class="stx-html-property">$1</span>"')
									   .replace(/("(?!stx)[a-z0-9 -]+")/gi, '<span class="stx-html-string">$1</span>')
									   .replace(/((&lt;\/?[a-z]+)|(&gt;))/gi, '<span class="stx-html-tag">$1</span>'));
		});
		
	});
	
})(jQuery);