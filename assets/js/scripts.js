$(function () {

  // Open navbarSide when button is clicked
  $('#navbarSideButton').on('click', function() {
    $('#navbarSide').addClass('reveal');
    $('.overlay').show();
  });

  // Close navbarSide when the outside of menu is clicked
  $('.overlay').on('click', function(){
    $('#navbarSide').removeClass('reveal');
    $('.overlay').hide();
  });

  $('.close').on('click', function(){
    $('#navbarSide').removeClass('reveal');
    $('.overlay').hide();
  });

});



// popover
$(function () {
  $('[data-toggle="popover"]').popover()
})

$('.popover-dismiss').popover({
  trigger: 'focus'
})


// Enable tooltips everywhere
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})




// heading loading
// $(document).ready(function() {
// 	setTimeout(function() {
// 		$("#heading-animation").removeClass("is-loading");
// 	}, 100)
// });
