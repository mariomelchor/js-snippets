/**
 *
 * Brings up print dialog on .print classes
 */

 jQuery( document ).ready(function($) {
	$( ".print" ).click(function(e) {
		e.preventDefault();
		window.print();
	});
})
