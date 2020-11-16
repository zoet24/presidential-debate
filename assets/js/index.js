$(".start-button").click(function(){ //Animation for index.html --> game.html transition
    var audio = document.getElementById("audio-wwe-bell");
    audio.currentTime = 0;
    setTimeout(function() {
        audio.play();
    }, 300);
    setTimeout(function() {
        $("#home-cta-tutorial").addClass("hide-button", "style.css");
    }, 400);
    setTimeout(function() {
        $("#home-cta-start").addClass("hide-button", "style.css");
    }, 600);
    setTimeout(function() {
        $("#home-title").addClass("hide-button", "style.css");
        $("#half-star").addClass("hide-button", "style.css");
    }, 800);
});

$('.start-button').click(function(e) { //Add delay to page change for animation https://forum.webflow.com/t/javascript-delay-on-page-links/38852/4
  console.log("block");
  e.preventDefault();
  setTimeout(function(url) { 
      window.location = url;
    }, 2500, this.href);
});