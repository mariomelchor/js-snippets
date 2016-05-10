(function($) {

	//Change html order of featured items
	$('.featured-item-desc').each(function(){
			$(this).find('.indicator-heading').insertAfter($(this).find('.featured-icons'));
	});

})( jQuery );
