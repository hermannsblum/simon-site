/**
 * @file
 * A JavaScript file for the comic viewer.
 */

let modalSlideIndex = 0;

// Thumbnail image controls
function currentSlide(n) {
  showSlides(n);
};

function showSlides(n) {
  modalSlideIndex = n;
  let i;
  let slides = document.getElementsByClassName("cv-preview");
  let thumbs = document.getElementsByClassName("cv-thumbnail");
  if (n > slides.length - 1) {
    modalSlideIndex = 0;
  }
  if (n < 0) {
    modalSlideIndex = slides.length - 1;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < thumbs.length; i++) {
    thumbs[i].className = thumbs[i].className.replace(" active", "");
  }

  slides[modalSlideIndex].style.display = "block";
  thumbs[modalSlideIndex].className += " active";

  // now same thing for modal
  slides = document.getElementsByClassName("cv-modal-slide");
  let numtexts = document.getElementsByClassName("numbertext");

  // var dots = document.getElementsByClassName("demo");
  // var captionText = document.getElementById("caption");
  modalSlideIndex = n;
  if (n > slides.length - 1) {
    modalSlideIndex = 0;
  }
  if (n < 0) {
    modalSlideIndex = slides.length - 1;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    numtexts[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[modalSlideIndex].style.display = "block";
  numtexts[modalSlideIndex].style.display = "block";
  // dots[slideIndex-1].className += " active";
  // captionText.innerHTML = dots[slideIndex-1].alt;
};


// Open the Modal
function openModal() {
  document.getElementById("cv-modal").style.display = "block";
  document.addEventListener("keydown", handleKeyDown); // Add event listener for keydown
  // document.addEventListener("touchstart", handleTouchStart, false); // Add touch event listeners
  // document.addEventListener("touchmove", handleTouchMove, false);
  // document.addEventListener("touchend", handleTouchEnd, false);
}

// Close the Modal
function closeModal() {
  document.getElementById("cv-modal").style.display = "none";
  document.removeEventListener("keydown", handleKeyDown); // Remove event listener for keydown
  // document.removeEventListener("touchstart", handleTouchStart, false); // Remove touch event listeners
  // document.removeEventListener("touchmove", handleTouchMove, false);
  // document.removeEventListener("touchend", handleTouchEnd, false);
}

// Next/previous controls
function plusModal(n) {
  showSlides((modalSlideIndex + n));
}

// Thumbnail image controls
function currentModal(n) {
  showSlides(n);
}

// Handle keyboard controls
function handleKeyDown(event) {
  switch (event.keyCode) {
    case 39: // ArrowRight
      plusModal(1);
      break;
    case 37: // ArrowLeft
      plusModal(-1);
      break;
    case 27: // Escape
      closeModal();
      break;
  }
}

// Variables to store touch positions
let xDown = null;
let yDown = null;

// Handle touch start
function handleTouchStart(event) {
  const firstTouch = event.touches[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

// Handle touch move
function handleTouchMove(event) {
  if (!xDown || !yDown) {
    return;
  }

  const xUp = event.touches[0].clientX;
  const yUp = event.touches[0].clientY;

  const xDiff = xDown - xUp;
  const yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    // Most significant swipe direction
    if (xDiff > 0) {
      // Left swipe
      plusModal(1);
    } else {
      // Right swipe
      plusModal(-1);
    }
  }

  // Reset values
  xDown = null;
  yDown = null;
}

// Handle touch end
function handleTouchEnd(event) {
  // Reset values
  xDown = null;
  yDown = null;
}


showSlides(0);
