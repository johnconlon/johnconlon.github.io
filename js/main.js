// Make it rain!
// Add thing that tells you how far you've scrolled form the top
$(window).on('scroll', function () {
	// Step 1: Google $(window).scrollTop();
	var distanceScrolled = $(window).scrollTop();

	console.log('The distance scrolled is: ' + distanceScrolled);

	if (distanceScrolled >= 1450) {
			$('.up-arrow').addClass('active');
		}
	else {
			$('.up-arrow').removeClass('active');
		}
});

// $('.up-arrow').on('click', function () {
//     $('up-arrow i').attr('href', 'www.google.com');   
// });

// when the use scrolls past the main header image
	// collapse the menu to left
	// turn into hamburger 
	// arrow up button appears on side of the screen to you to the top


// 


// Smooth scroll this mother!

// Do it when someone clicks a nav link
$('nav a').on('click', function(e) {
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