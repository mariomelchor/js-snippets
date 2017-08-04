/**
* Sets equal height for all .widget in .featured-items-wrap
*/
$('.featured-items-wrap').each(function(){
  // Cache the highest
  var highestBox = 0;

  // Select and loop the elements you want to equalise
  $('.widget', this).each(function(){
    // If this box is higher than the cached highest then store it
    if( $(this).height() > highestBox ) {
      highestBox = $(this).height();
    }
  });

  // Set the height of all those children to whichever was highest
  $( '.widget', this ).css( 'min-height', highestBox );
});