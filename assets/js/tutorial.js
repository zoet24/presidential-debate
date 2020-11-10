$(".carousel-control").click(function(){
    setTimeout(function() {
        if($("#carousel-second-slide").hasClass('active')) {
            slide();
        }
        else {
            resetSlide();
        }
    }, 1000);
});

function slide(){
    setTimeout(function() {
        $(".image-2").addClass("hide-button", "style.css");
        $(".image-3").removeClass("hide-button", "style.css");
    }, 50);
    setTimeout(function() {
        $(".image-3").addClass("hide-button", "style.css");
        $(".image-4").removeClass("hide-button", "style.css");
    }, 300);
    setTimeout(function() {
        $(".image-4").addClass("hide-button", "style.css");
        $(".image-5").removeClass("hide-button", "style.css");
    }, 1250);
    setTimeout(function() {
        $(".image-5").addClass("hide-button", "style.css");
        $(".image-6").removeClass("hide-button", "style.css");
    }, 1500);
    setTimeout(function() {
        $(".image-6").addClass("hide-button", "style.css");
        $(".image-7").removeClass("hide-button", "style.css");
    }, 1750);
}

function resetSlide(){
    $(".image-7").addClass("hide-button", "style.css");
    $(".image-2").removeClass("hide-button", "style.css");
}