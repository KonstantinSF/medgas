var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");//num of slides collection
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} //out of range
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) { //off all slides
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) { //replace the dot
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; //show the slide
  dots[slideIndex-1].className += " active";
}