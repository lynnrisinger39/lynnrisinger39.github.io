$('.hamburger').on('click', function(){
	$('.sidebar').toggleClass('active')
});

// when user clicks on .close
// 	prevent default action of page refreshing 
// 	remove active class

// $('.close').on('click',function(e){
// 	e.preventDefault();
// 	$('.sidebar').removeClass('active')
// });



// Smooth Scroll 
// Do it when someone clicks a nav link
$('.eventsnav a').on('click', function(e) {
  // prevent the standard link operation on click
  e.preventDefault();
  // use the href of the link to identify what
  // section to scroll to
  var thisTarget = $(this).attr('href');
  // get that section's top offset
  var targetOffset = $(thisTarget).offset().top;
  // use jQuery.animate() to animate the body's
  // scrollTop to the targetOffest
  $('body').animate({
    scrollTop: targetOffset
  }, 600);
});

// $('#eventsnav').smoothScroll(600);