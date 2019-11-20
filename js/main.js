

$(document).ready(function(){

	var prevScrollpos = window.pageYOffset;
	window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	  if (prevScrollpos > currentScrollPos) {
	    document.getElementById("navbar").style.top = "0";
	    document.getElementById("navbar").classList.add("show-shadow");
	  } else {
	    document.getElementById("navbar").style.top = "-80px";
	    document.getElementById("navbar").classList.remove("show-shadow");
	  }
	  prevScrollpos = currentScrollPos;
	  
	  if (currentScrollPos == 0){
	    document.getElementById("navbar").classList.remove("show-shadow");
	  }
	}


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