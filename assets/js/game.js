//Game variables
var game = {
    level: 1,
    turn: 0,
    difficulty: 1,
    score: 0,
    turnActive: false,
    compSequence: [],
    userSequence: [],
}

//Clicking start button calls newGame function
$("#start").click(function(){
    newGame();
});

//newGame function hides start button, resets game variables
function newGame(){
    $("#start").addClass("hide-button");
    game.level = 1;
    game.turn = 0;
    game.difficulty = 1;
    game.score = 0;
    game.turnActive = true;
    game.compSequence = [];
    game.userSequence = [];
}

//Clicking Trump/Biden buttons triggers reaction
$(".box-trump-1").click(function(){
    boxTrumpOne();
});

$(".box-biden-1").click(function(){
    boxBidenOne();
});

function boxTrumpOne(){
    var audio = document.getElementById("audio-trump-1");
    audio.play();
    $(".box-trump-1").addClass("shake");
        setTimeout(function () {
        		$(".box-trump-1").removeClass("shake");
        }, 600);
}

function boxBidenOne(){
    var audio = document.getElementById("audio-biden-1");
    audio.play();
    $(".box-biden-1").addClass("shake");
        setTimeout(function () {
        		$(".box-biden-1").removeClass("shake");
        }, 600);
}