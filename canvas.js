var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
var particlesOnScreen = 300;
var particlesArray = [];
var w,h;
w = canvas.width = window.innerWidth;
h = canvas.height = window.innerHeight;

function random(min, max) {
	return min + Math.random() * (max - min + 1);
};

function clientResize(ev) {
	w = canvas.width = window.innerWidth;
	h = canvas.height = window.innerHeight;
};

window.addEventListener("resize", clientResize);

function sakura() {
	for (var i = 0; i < particlesOnScreen; i++) {
		particlesArray.push({
			x: Math.random() * w,
			y: Math.random() * h,
			opacity: Math.random(),
			speedX: random(-11, 11),
			speedY: random(7, 15),
			radius: random(0.5, 4.2)
		})
	}
};

function drawSakura() {
	for (var i = 0; i < particlesArray.length; i++) {
		var gradient = c.createRadialGradient(
			particlesArray[i].x,
			particlesArray[i].y,
			0,
			particlesArray[i].x,
			particlesArray[i].y,
			particlesArray[i].radius
			);

		gradient.addColorStop(0, "rgba(255, 255, 255)"); //white
		gradient.addColorStop(1, "rgba(255, 183, 197)"); //pink

		c.beginPath();
		c.arc(
			particlesArray[i].x,
			particlesArray[i].y,
			particlesArray[i].radius,
			0,
			Math.PI * 2,
			false
			);

		c.fillStyle = gradient;
		c.fill();
	}
};

function fallingSakura() {
	for (var i = 0; i < particlesArray.length; i++) {
		particlesArray[i].x += particlesArray[i].speedX;
		particlesArray[i].y += particlesArray[i].speedY;

		if (particlesArray[i].y > h) {
			particlesArray[i].x = Math.random() * w * 1.5;
			particlesArray[i].y = -50;
		}
	}
};

function updateSakura() {
	c.clearRect(0, 0, w, h);
	drawSakura();
	fallingSakura();
};

setInterval(updateSakura, 50);
sakura();

(function ($) {
  $(document).ready(function(){
    
	// hide .navbar first
	$(".navbar").hide();
	
	// fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 100) {
				$('.navbar').fadeIn();
			} else {
				$('.navbar').fadeOut();
			}
		});

	
	});

});
  }(jQuery));