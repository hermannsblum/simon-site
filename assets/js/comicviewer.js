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
  let thumbs = document.getElementsByClassName("cv-thumbnail-img");
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
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[modalSlideIndex].style.display = "block";
  // dots[slideIndex-1].className += " active";
  // captionText.innerHTML = dots[slideIndex-1].alt;
};


// Open the Modal
function openModal() {
  document.getElementById("cv-modal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("cv-modal").style.display = "none";
}

// Next/previous controls
function plusModal(n) {
  showSlides((modalSlideIndex + n));
}

// Thumbnail image controls
function currentModal(n) {
  showSlides(n);
}


showSlides(0);
