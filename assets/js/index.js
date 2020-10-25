$('.start-button').click(function(e) { //Add delay to page change for animation https://forum.webflow.com/t/javascript-delay-on-page-links/38852/4
  console.log("block");
  e.preventDefault();
  setTimeout(function(url) { window.location = url }, 2500, this.href);
});

$(".start-button").click(function(){
    var audio = document.getElementById("audio-wwe-bell");
    audio.currentTime = 0;
    $(".img-container-trump-initial").addClass("trump-slide");
    $(".img-container-biden-initial").addClass("biden-slide");

    // setTimeout(function() {
    //     $(".img-container-trump-initial").addClass("trump-slide");
    // }, 0);
    // setTimeout(function() {
    //     $(".img-container-biden-initial").addClass("biden-slide");
    // }, 0);
    setTimeout(function() {
        audio.play();
    }, 800)
    setTimeout(function() {
        $("#home-cta-tutorial").addClass("hide-button");
    }, 900);
    setTimeout(function() {
        $("#home-cta-start").addClass("hide-button");
    }, 1100);
    setTimeout(function() {
        $("#home-title").addClass("hide-button");
    }, 1300);
});