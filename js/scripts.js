obj = {};

obj.banner = (function() {

	var banner  		= document.getElementById('slide-container');
	var back			= document.querySelector('.back');
	var next			= document.querySelector('.next');
	var currentImage 	= 0;
	var imgXPos			= ["0%", "-25%", "-50%", "-75%"];

	init();

	function init() {
		next.addEventListener("click", slideforward);
		back.addEventListener("click", slideBack);
	}

	function slideBack() {
		if( currentImage > 0) {
			TweenMax.to(banner, 0.5, {x:imgXPos[--currentImage]});
			disableSliderNav();
		}
	}

	function slideforward() {
		if( currentImage < imgXPos.length - 1) {
			TweenMax.to(banner, 0.5, {x:imgXPos[++currentImage]});
			disableSliderNav();
		}
	}

	function disableSliderNav() {
		
		var arrowLT = back.querySelector('span');
		var arrowRT = next.querySelector('span');

		if( currentImage !== 0) {
			arrowLT.style.color = "#fff";
		} else {
			arrowLT.style.color = "rgba(255,255,255,0.5)";
		}

		if( currentImage !== imgXPos.length - 1) {
			arrowRT.style.color = "#fff";
		} else {
			arrowRT.style.color = "rgba(255,255,255,0.5)";
		}

	}

})();