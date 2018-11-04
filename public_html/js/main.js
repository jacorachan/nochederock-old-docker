$( document ).ready(function() {

  $('body').on('mouseenter mouseleave','.dropdown',function(e){
    var dropdown = $(e.target).closest('.dropdown');
    dropdown.addClass('show');
    setTimeout(function(){
      dropdown[dropdown.is(':hover')?'addClass':'removeClass']('show');
      $('[data-toggle="dropdown"]', dropdown).attr('aria-expanded',dropdown.is(':hover'));
    },300);
  });

  $("#toggle-search").click(function() {
    $("#search-container").toggleClass("hidden");
  });

});
