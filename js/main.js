
$(window).on('scroll', function () {
	// Step 1: Google $(window).scrollTop();
	var distanceScrolled = $(window).scrollTop();

	// console.log('The distance scrolled is: ' + distanceScrolled);

	if (distanceScrolled >= 1450) {
			$('.up-arrow').addClass('active');
			$(".hamburger").css("color", "black");
		}
	else {
			$('.up-arrow').removeClass('active');
			$(".hamburger").css("color", "white");
		}
});



// Do it when someone clicks a nav link
$('nav a, .up-arrow a, .down-arrow a').on('click', function(e) {
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


$(".hamburger").on('click', function (event) {
	event.preventDefault();
    $('nav').toggleClass('mobile-nav');
    $('.hamburger').toggleClass('close');	  
});

// $(".hamburger close").on('click', function (event) {
//     event.preventDefault();
//     $('.hamburger').removeClass('close');
//     $('nav').removeClass('mobile-nav');
//     $('nav').addClass('mobile-close');
// });

// $(".hamburger").on('click', function (event) {
// 	if $(".hamburger").hasClass('close') {
// 		event.preventDefault();
// 		$('nav').addClass('mobile-close');
// 	} else {
// 		event.preventDefault();
// 	    $('nav').addClass('mobile-nav');
// 	    $('.hamburger').addClass('close');
// 	} 	  
// });

// if has class mobile nav removeclass mobile nav add class mobile close
// else removeClass mobile-close add class 
