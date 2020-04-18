$(document).ready(function(){
	$("a").on("click", function (event) {
		// exclude standard response browser
		event.preventDefault();

		// get element from the href attribute
		var elem = $(this).attr('href'),

		// find the height at which the element is placed
		top = $(elem).offset().top - 100;

		// use the transition block time: 800 MS
		$('body,html').animate({scrollTop: top}, 800);
	});
});
