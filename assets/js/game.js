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