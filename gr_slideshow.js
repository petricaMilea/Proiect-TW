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

// Lista imagini Turcia
trImages[0] = "images/turcia1.jpg";
trImages[1] = "images/turcia2.jpg";
trImages[2] = "images/turcia3.jpg";


function trChangeImg() {
    document.tr_slide.src = trImages[j];

    // Check If Index Is Under Max
    if (j < trImages.length - 1) {
        // Add 1 to Index
        j++;
    } else {
        // Reset Back To O
        j = 0;
    }

    // Run function every x seconds
    setTimeout("trChangeImg()", time);
}


// Change Image
function grChangeImg() {
    document.gr_slide.src = grImages[i];

    // Check If Index Is Under Max
    if (i < grImages.length - 1) {
        // Add 1 to Index
        i++;
    } else {
        // Reset Back To O
        i = 0;
    }

    // Run function every x seconds
    setTimeout("grChangeImg()", time);
}

// Run function when page loads
window.onload = trChangeImg;
window.onload = grChangeImg;
