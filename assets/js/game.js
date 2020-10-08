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

//randomSequence function generates a random whole number between 1 and 2 and pushes it into the compSequence array
function randomSequence(){
    for(i=0;i<game.turn;i++){
        this.compSequence.push(Math.floor(Math.random() * 2) + 1);
    }
}

// function boxReact(i){

// }

//Clicking Trump/Biden buttons triggers reaction (DELETE LATER ON)
$(".box-trump-1").click(function(){
    boxTrumpOne();
});

$(".box-biden-1").click(function(){
    boxBidenOne();
});

//Reactions are audio clip and CSS shake effect
function boxTrumpOne(){
    var audio = document.getElementById("audio-trump-1");
    audio.currentTime = 0;
    audio.play();
    $(".box-trump-1").addClass("shake");
        setTimeout(function () {
            audio.pause();   
            $(".box-trump-1").removeClass("shake");
        }, 1200);
}

function boxBidenOne(){
    var audio = document.getElementById("audio-biden-1");
    audio.currentTime = 0;
    audio.play();
    $(".box-biden-1").addClass("shake");
        setTimeout(function () {
            audio.pause();    
            $(".box-biden-1").removeClass("shake");
        }, 1200);
}