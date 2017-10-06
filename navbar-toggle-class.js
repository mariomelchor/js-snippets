  /**
   * Bootstrap navbar toggle change class
   */
  $('.navbar-toggle ').on('click',function() {
    var icon = $(this).find('.glyphicon');
    icon.toggleClass('glyphicon-menu-hamburger glyphicon-remove');
  });
