var i = 0; 			// Start Point
var j = 0; // End Point
var grImages = [];	// Greece Images Array
var trImages = [];	// Turkey Images Array
var time = 3000;	// Time Between Switch

// Greece Image List
grImages[0] = "images/grecia1.jpg";
grImages[1] = "images/grecia2.jpg";
grImages[2] = "images/grecia3.jpg";
grImages[3] = "images/grecia4.jpg";

// Turkey image list
trImages[0] = "images/turcia1.jpg";
trImages[1] = "images/turcia2.jpg";
trImages[2] = "images/turcia3.jpg";


// slideshow images
function changeImg() {
	document.gr_slide.src = grImages[i];

	// check if index is less than length
	if (i < grImages.length - 1) {
		// Add 1 to Index
		i++;
	} else {
		// reset index to O
		i = 0;
	}

	document.tr_slide.src = trImages[j];

	// check if index is less than length
	if (j < trImages.length - 1) {
		// Add 1 to Index
		j++;
	} else {
		// reset index to O
		j = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}





