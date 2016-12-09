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
		}
	}

	function slideforward() {
		if( currentImage < imgXPos.length - 1) {
			TweenMax.to(banner, 0.5, {x:imgXPos[++currentImage]});
		}
	}

})();