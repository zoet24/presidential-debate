// Check if device is in portrait mode
onload = function () {
    if (window.innerWidth < window.innerHeight == true) { // Portrait
        $(".container-portrait-overlay").removeClass("hide-button", "style.css");
        $("#home-title").addClass("hide-button", "style.css");
		$("#home-cta-start").addClass("hide-button", "style.css");
		$("#home-cta-tutorial").addClass("hide-button", "style.css");
    }
};

// Listen for orientation changes - source: https://stackoverflow.com/questions/40257329/on-mobile-how-can-i-display-an-overlay-when-the-screen-orientation-is-in-landsc
window.addEventListener("orientationchange", function() {
    if (window.innerWidth > window.innerHeight == true) {
        $(".container-portrait-overlay").removeClass("hide-button", "style.css");
        $("#home-title").addClass("hide-button", "style.css");
        $("#home-cta-start").addClass("hide-button", "style.css");
        $("#home-cta-tutorial").addClass("hide-button", "style.css");
    } else {
        $(".container-portrait-overlay").addClass("hide-button", "style.css");
        $("#home-title").removeClass("hide-button", "style.css");
        $("#home-cta-start").removeClass("hide-button", "style.css");
        $("#home-cta-tutorial").removeClass("hide-button", "style.css");
    }
});

$(".start-button").click(function () { // Animation for index.html --> game.html transition
	var audio = document.getElementById("audio-wwe-bell");
	audio.currentTime = 0;
	setTimeout(function () {
		audio.play();
	}, 300);
	setTimeout(function () {
		$("#home-cta-tutorial").addClass("hide-button", "style.css");
	}, 400);
	setTimeout(function () {
		$("#home-cta-start").addClass("hide-button", "style.css");
	}, 600);
	setTimeout(function () {
		$("#home-title").addClass("hide-button", "style.css");
	}, 800);
});

$('.start-button').click(function (e) { // Add delay to page change for animation - source: https://forum.webflow.com/t/javascript-delay-on-page-links/38852/4
	e.preventDefault();
	setTimeout(function (url) {
		window.location = url;
	}, 2500, this.href);
});