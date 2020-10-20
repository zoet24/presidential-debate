//Bug fix credit - https://github.com/MatthewYong/twufo, $(".box-game").css("cursor", "");

//Game variables
var game = {
    level: 0,
    count: 0,
    turn: 1,
    score: 0,
    // difficulty: 1,
    compSequence: [],
    dispSequence: [],
    userSequence: [],
}

//Clicking start button calls newGame()
$("#start").click(function(){
    newGame();

    console.log("start");
});

//newGame() hides start button, resets game variables, calls compTurn()
function newGame(){
    $("#start").addClass("hide-button");
    game.level = 1;
    game.count = 1;
    game.score = 0;
    // game.difficulty = 1;
    game.dispSequence = [];

    showScore();
    newLevel();
    
    // console.log("NEW GAME", "Level:", game.level, "Count:", game.count, "Turn:", game.turn, "Score:", game.score);
    // console.log("comp", game.compSequence, "disp", game.dispSequence, "user", game.userSequence);
    console.log("newGame");
}

function newLevel() {
    game.compSequence.length = 0;
    game.userSequence.length = 0;

    randomSequence();
    showSequence();

    console.log("newLevel");
}

//compTurn() generates a random whole number between 0 and 5 and pushes it into compSequence[], calls boxReact() x # of turns
function randomSequence(){
    setTimeout(function() {
        for(i=0; i<game.level; i++){
            game.compSequence.push(Math.floor(Math.random() * 6));
        }
    }, 100);

    console.log("randomSequence");
}

 function showSequence(){   
    setTimeout(function() {    
        for(i=0; i<game.compSequence.length; i++) {
            boxReact(i);
        }
    }, 100);

    // console.log("COMP TURN", "Level:", game.level, "Count:", game.count, "Turn:", game.turn, "Score:", game.score);
    // console.log("comp", game.compSequence, "disp", game.dispSequence, "user", game.userSequence);
    console.log("showSequence");
}

//userTurn() - push user input into userSequence[]
function userTurn() {
    $(".box-game").on("click", function(){
        $(this).addClass("shake");
        $(".box-game").off();
        setTimeout(function() {
            $(".box-game").removeClass("shake");
            $(".box-game").css("cursor", "");
            compareSequences();
        }, 500);
        console.log("userTurn");
    });
    
    $(".box-trump-1").click(function(){
        game.userSequence.push(0);
        boxTrumpOne();
    });

    $(".box-biden-1").click(function(){
        game.userSequence.push(1);
        boxBidenOne();
    });

    $(".box-trump-2").click(function(){
        game.userSequence.push(2);
        boxTrumpTwo();
    });

    $(".box-biden-2").click(function(){
        game.userSequence.push(3);
        boxBidenTwo();
    });

    $(".box-trump-3").click(function(){
        game.userSequence.push(4);
        boxTrumpThree();
    });

    $(".box-biden-3").click(function(){
        game.userSequence.push(5);
        boxBidenThree();
    });

    // console.log("USER TURN", "Level:", game.level, "Count:", "Turn:", game.turn, "Score:", game.score);
    // console.log("comp", game.compSequence, "disp", game.dispSequence, "user", game.userSequence);
}

//compareSequences() compares compSequence[] and userSequence[], calls gameOver(), gameContinue() or userTurn()
function compareSequences() {
        if (game.userSequence[game.count] != game.compSequence[game.count]) { //User turn unsuccessful
            //Add CSS reaction later
            $("#retry").removeClass("hide-button");
            $("#retry").click(function() {
                gameRetry();
            });
        }
        else {
            if (game.userSequence.length == game.compSequence.length) { //User turn successful
                //Add CSS reaction later
                game.count = 0;
                $("#continue").removeClass("hide-button");
                $("#continue").click(function() {
                    gameContinue();
                });
            }
            else { //User turn still in progress
                //Add CSS reaction later
                game.count++;
                userTurn();
            }
        }

        console.log("compareSequences");
        // console.log("COMPARE SEQUENCES", "Level:", game.level, "Count:", "Turn:", game.turn, "Score:", game.score);
        // console.log("comp", game.compSequence, "disp", game.dispSequence, "user", game.userSequence);

    }

//Score()
function showScore() {
    $('.score-count span').text(`Score: `+game.score);
    console.log("showScore");
    }

function calculateScore() {
    game.score++;
    showScore();
    console.log("calculateScore");
}

//gameOver()
function gameRetry() {
    $("#retry").addClass("hide-button");
    $("#start").removeClass("hide-button");

    console.log("gameOver");
    // console.log("GAME OVER", "Level:", game.level, "Count:", game.count, "Turn:", game.turn, "Score:", game.score);
    // console.log("comp", game.compSequence, "disp", game.dispSequence, "user", game.userSequence);
}

//gameContinue()
function gameContinue() {
    $("#continue").addClass("hide-button");
    $("#continue").off("click");
    // game.compSequence = [];
    game.dispSequence = [];
    game.userSequence = [];
    game.level++;
    game.turn
    calculateScore();

    console.log("gameContinue");
    // console.log("GAME CONTINUE", "Level:", game.level, "Count:", game.count, "Turn:", game.turn, "Score:", game.score);
    // console.log("comp", game.compSequence, "disp", game.dispSequence, "user", game.userSequence);

    newLevel();
}

//boxReact() accesses each value in compSequence[], pushes relevant value into dispSequence[], calls relevant reaction
function boxReact(i){
    setTimeout(function () {
        if (game.compSequence[i] == 0) {
            game.dispSequence.push(i);
            boxTrumpOne();
        }
        if (game.compSequence[i] == 1) {
            game.dispSequence.push(i);
            boxBidenOne();
        }
        if (game.compSequence[i] == 2) {
            game.dispSequence.push(i);
            boxTrumpTwo();
        }
        if (game.compSequence[i] == 3) {
            game.dispSequence.push(i);
            boxBidenTwo();
        }
        if (game.compSequence[i] == 4) {
            game.dispSequence.push(i);
            boxTrumpThree();
        }
        if (game.compSequence[i] == 5) {
            game.dispSequence.push(i);
            boxBidenThree();
        }
        //When length of compSequence[] = length of dispSequence[] boxReact() calls userTurn()
        if (game.compSequence.length == game.dispSequence.length) {
            setTimeout(function() {
                $(".box-game").css("cursor", "");
                userTurn();
            }, 200);
            console.log("boxReact");
        }
    }, 1000 * i);
}

//Reactions are audio clip and CSS shake effect
function boxTrumpOne(){
    var audio = document.getElementById("audio-trump-1");
    // audio.currentTime = 0;
    audio.play();
    $(".box-trump-1").addClass("shake");
        setTimeout(function () {
            // audio.pause();   
            $(".box-trump-1").removeClass("shake");
        }, 500);
    audio.currentTime = 0;
}

function boxBidenOne(){
    var audio = document.getElementById("audio-biden-1");
    // audio.currentTime = 0;
    audio.play();
    $(".box-biden-1").addClass("shake");
        setTimeout(function () {
            // audio.pause();    
            $(".box-biden-1").removeClass("shake");
        }, 500);
    audio.currentTime = 0;
}

function boxTrumpTwo(){
    var audio = document.getElementById("audio-trump-2");
    // audio.currentTime = 0;
    audio.play();
    $(".box-trump-2").addClass("shake");
        setTimeout(function () {
            // audio.pause();   
            $(".box-trump-2").removeClass("shake");
        }, 500);
    audio.currentTime = 0;
}

function boxBidenTwo(){
    var audio = document.getElementById("audio-biden-2");
    // audio.currentTime = 0;
    audio.play();
    $(".box-biden-2").addClass("shake");
        setTimeout(function () {
            // audio.pause();    
            $(".box-biden-2").removeClass("shake");
        }, 500);
    audio.currentTime = 0;
}

function boxTrumpThree(){
    var audio = document.getElementById("audio-trump-3");
    // audio.currentTime = 0;
    audio.play();
    $(".box-trump-3").addClass("shake");
        setTimeout(function () {
            // audio.pause();   
            $(".box-trump-3").removeClass("shake");
        }, 500);
    audio.currentTime = 0;
}

function boxBidenThree(){
    var audio = document.getElementById("audio-biden-3");
    // audio.currentTime = 0;
    audio.play();
    $(".box-biden-3").addClass("shake");
        setTimeout(function () {
            // audio.pause();    
            $(".box-biden-3").removeClass("shake");
        }, 500);
    audio.currentTime = 0;
}