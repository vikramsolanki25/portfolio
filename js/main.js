$(document).ready(function(){
	// var banner = $(".banner");

	// $(".banner-container").on("mousemove",function(e) {  
	//   var ax = -($(".banner-container").innerWidth()/2- e.pageX)/250;
	//   var ay = ($(".banner-container").innerHeight()/2- e.pageY)/125;
	//   banner.attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");
	// });

	$(".do-move-to-projects").on("click", function() {
		$([document.documentElement, document.body]).animate({
        	scrollTop: $("#projects").offset().top
    	}, 1200);
	})
});