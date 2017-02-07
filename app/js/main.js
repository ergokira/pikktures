$(function () {

	'use strict';
	
	$('.main-nav li a').on('click', function(event) {
		if (window.matchMedia("(max-width: 760px)").matches) {
			$(this).closest('.collapse').collapse('toggle');
		}
	});

	$(window).on('hashchange', function() {
		var currentHash = location.hash;
		$('.main-nav li').removeClass('active-tab');
		$('section').children().addClass('hide');
		$(currentHash).addClass('active-tab');
		$('.section-' + currentHash.replace(/^#/,'')).removeClass('hide');
	});

	//Script to Activate the Carousel
	$('.carousel').carousel({
		interval: 3800, // Changes the speed
		pause:null  // If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on mouseleave. If set to null, hovering over the carousel won't pause it.
	})
});





