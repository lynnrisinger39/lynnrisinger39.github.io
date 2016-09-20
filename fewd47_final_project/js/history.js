
// Slide out nav bar with hamburger menu 
$('.hamburger').on('click', function(){
	$('.sidebar').toggleClass('active')
});

// GLOBAL VARIABLES -------

// STEP 1: Store an array of image paths in the images variable.
// HINT: Be sure to include the folder name (images) in the paths.
var images = ['images/ancientgympic1.jpg','images/ancientgympic2.jpg','images/ancientgympic3.jpg','images/moderngympic2.jpg','images/moderngympic3.jpg'];

// Here we have a variable to store the current index.
// We will start at the first image (which has an index of 0).
var currentIndex = 0;


// EVENTS ---------
// STEP 2: Update the current index.
		// Each time the user clicks next, we want to add one to currentIndex.
		// If the user has reached the last image, we want to set the currentIndex to 0.


$('#next').on('click', function () {
	if (currentIndex === (images.length -1)) {
		currentIndex = 0;
	} else {
		currentIndex += 1;
	}

	console.log(currentIndex);

	// STEP 3: Update the src attribute for the image to the src stored at the currentIndex.
	$('#image-to-vote-on').attr('src', images[currentIndex]);

});

// STEP 4: Set up functionality for when the user clicks the prev button.
$('#prev').on('click', function() {
	
	if (currentIndex === 0 ) {
		currentIndex = images.length -1;
	} else {
		currentIndex -= 1;
	}
	console.log(currentIndex);

	$('#image-to-vote-on').attr('src', images[currentIndex]);

});