
// mobile burger menu
const burger = document.querySelector('.burger-menu');
const menuLinks = document.querySelector('.my-links');

function menuSlide() {
	burger.addEventListener('click', function() {
		menuLinks.classList.toggle('menu-active');
	});
}

menuSlide();

const aboutUs = document.querySelector('.my-links-wrapper');

	function menuSlideBack() {
	aboutUs.addEventListener('click', function() {
		menuLinks.classList.remove('menu-active');
	});
}

menuSlideBack();


// carousel slideshow
//TODO: make bigger picture when clicked on it

var imageIndex = 1;
showImage(imageIndex);

function plusImage(n) {
	showImage(imageIndex += n);
}

function showImage(n) {
	var i;
	var x = document.getElementsByClassName('special-offer-image');
	if (n > x.length) {
		imageIndex = 1;
	}
	if (n < 1) {
		imageIndex = x.length;
	}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
		x[imageIndex-1].style.display = "block";
}


/* TODO: 
	1. with js and php make registration form validation code and server with client registration information
	2. set cookies */
