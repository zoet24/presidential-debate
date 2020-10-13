//Game variables
var game = {
    level: 0,
    turn: 0,
    score: 0,
    count: 0,
    // difficulty: 1,
    compSequence: [],
    dispSequence: [],
    userSequence: [],
}

//Clicking start button calls newGame()
$("#start").click(function(){
    newGame();
});

//newGame() hides start button, resets game variables, calls compTurn()
function newGame(){
    $("#start").addClass("hide-button");
    game.level = 1;
    game.turn = 1;
    game.score = 0;
    game.count = 0;
    // game.difficulty = 1;
    game.compSequence = [];
    game.dispSequence = [];
    game.userSequence = [];
    compTurn();
}

//compTurn() generates a random whole number between 1 and 2 and pushes it into compSequence[], calls boxReact() x # of turns
function compTurn(){
    setTimeout(function() {
    for(i=0;i<game.turn;i++){
        game.compSequence.push(Math.floor(Math.random() * 2) + 1);
    }
    for(i=0;i<game.compSequence.length; i++) {
        boxReact(i);
    }
    }, 250);
}

//boxReact() accesses each value in compSequence[], pushes relevant value into dispSequence[], calls relevant reaction
function boxReact(i){
    setTimeout(function () {
        if (game.compSequence[i] == 1) {
            game.dispSequence.push(i);
            boxTrumpOne();
        }
        if (game.compSequence[i] == 2) {
            game.dispSequence.push(i);
            boxBidenOne();
        }
        //When length of compSequence[] = length of dispSequence[] boxReact() calls userTurn()
        if (game.compSequence.length == game.dispSequence.length) {
            setTimeout(function() {
                userTurn();
            }, 250);
        }
    }, 250 * i);
}

//Clicking Trump/Biden buttons triggers reaction (DELETE LATER ON)
// $(".box-trump-1").click(function(){
//     boxTrumpOne();
// });

// $(".box-biden-1").click(function(){
//     boxBidenOne();
// });

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

//userTurn() - push user input into userSequence[]
function userTurn() {
    $(".box-game").on("click", function(){
        setTimeout(function() {
            compareSequences();
        }, 250);
    });
    
    $(".box-trump-1").click(function(){
        game.userSequence.push(1);
        boxTrumpOne();
    });

    $(".box-biden-1").click(function(){
        game.userSequence.push(2);
        boxBidenOne();
    });
}

//compareSequences() compares compSequence[] and userSequence[], calls gameOver(), gameContinue() or userTurn()
function compareSequences() {
    //if compSequence != userSequence then turn has not been successful, end game
    if (game.userSequence[game.count] != game.compSequence[game.count]) {
        //Add CSS reaction later
        gameOver();    
    }
    else {
        //if compSequence == userSequence then turn has been successful, add points to score, call new compTurn
        if (game.userSequence[game.count] == game.compSequence[game.count]) {
            //Add CSS reaction later
            gameContinue();
        }
        //else turn is not done yet
        else {
            userTurn();
            game.count++;
        }
    }
}

//gameOver()
function gameOver() {
    $("#start").removeClass("hide-button");
}

//gameContinue()
function gameContinue() {
    game.compSequence = [];
    game.dispSequence = [];
    game.userSequence = [];
    game.level++;
    compTurn();
}