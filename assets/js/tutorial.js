$(".carousel-control").click(function(){
    setTimeout(function() {
        if($("#carousel-third-slide").hasClass('active')) {
            slideThird();
        }
        if($("#carousel-fourth-slide").hasClass('active')) {
            slideFourth();
        }
        if($("#carousel-fifth-slide").hasClass('active')) {
            slideFifth();
        }
        if($("#carousel-sixth-slide").hasClass('active')) {
            slideSixth();
        }
        else {
            resetSlide();
        }
    }, 1000);
});

function slideThird(){
    setTimeout(function() {
        $(".image-3").addClass("hide-button", "style.css");
        $(".image-4").removeClass("hide-button", "style.css");
    }, 50);
    setTimeout(function() {
        $(".image-4").addClass("hide-button", "style.css");
        $(".image-5").removeClass("hide-button", "style.css");
    }, 300);
}

function slideFourth(){
    setTimeout(function() {
        $(".image-6").addClass("hide-button", "style.css");
        $(".image-7").removeClass("hide-button", "style.css");
    }, 50);
    setTimeout(function() {
        $(".image-7").addClass("hide-button", "style.css");
        $(".image-8").removeClass("hide-button", "style.css");
    }, 300);
}

function slideFifth(){
    setTimeout(function() {
        $(".image-9").addClass("hide-button", "style.css");
        $(".image-10").removeClass("hide-button", "style.css");
    }, 50);
    setTimeout(function() {
        $(".image-10").addClass("hide-button", "style.css");
        $(".image-11").removeClass("hide-button", "style.css");
    }, 300);
    setTimeout(function() {
        $(".image-11").addClass("hide-button", "style.css");
        $(".image-12").removeClass("hide-button", "style.css");
    }, 550);
}

function slideSixth(){
    setTimeout(function() {
        $(".image-13").addClass("hide-button", "style.css");
        $(".image-14").removeClass("hide-button", "style.css");
    }, 50);
    setTimeout(function() {
        $(".image-14").addClass("hide-button", "style.css");
        $(".image-15").removeClass("hide-button", "style.css");
    }, 300);
    setTimeout(function() {
        $(".image-15").addClass("hide-button", "style.css");
        $(".image-16").removeClass("hide-button", "style.css");
    }, 550);
}

function resetSlide(){
    $(".image-5").addClass("hide-button", "style.css");
    $(".image-3").removeClass("hide-button", "style.css");
    $(".image-8").addClass("hide-button", "style.css");
    $(".image-6").removeClass("hide-button", "style.css");
    $(".image-12").addClass("hide-button", "style.css");
    $(".image-9").removeClass("hide-button", "style.css");
    $(".image-16").addClass("hide-button", "style.css");
    $(".image-13").removeClass("hide-button", "style.css");
}