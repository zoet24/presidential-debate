// Game variables
var game = {
    level: 0,
    count: 0,
    userScore: 0,
    highScore: localStorage.getItem("highScore"),
    difficulty: 1,

    scoreMultiplier: 1,
    scoreIncrease: 1,

    prev: 0,
    next: 0,

    compSequenceArr: [],
    showSequenceArr: [],
    userSequenceArr: [],
};

// When page loads, animate background images and trigger difficulty menu modal
onload = function() {
    setTimeout(function() {
        $(".img-container-trump-initial").addClass("trump-slide");
        $(".img-container-biden-initial").addClass("biden-slide");
    }, 1000);
    setTimeout(function() {
        document.getElementById("modal-difficulty-menu-btn").click();
    }, 2000);
};

// When start button is clicked set difficulty, animate game boxes, animate user info boxes and trigger newGame()
$("#game-btn").click(function(){
    game.difficulty = $('input[name=difficulty]:checked').val();

    setTimeout(function() {
        $(".box-trump-1").removeClass("hide-button", "style.css");
        var audio = document.getElementById("audio-trump-1");
        audio.currentTime = 0;
        audio.play();
        $(".box-trump-1").addClass("shake");
            setTimeout(function () {
                audio.pause();   
                $(".box-trump-1").removeClass("shake");
            }, 1000);
        audio.currentTime = 0;
    }, 0);

    setTimeout(function() {
        $(".box-biden-1").removeClass("hide-button", "style.css");
        var audio = document.getElementById("audio-biden-1");
        audio.currentTime = 0;
        audio.play();
        $(".box-biden-1").addClass("shake");
            setTimeout(function () {
                audio.pause();    
                $(".box-biden-1").removeClass("shake");
            }, 1000);
        audio.currentTime = 0;
    }, 0);

    setTimeout(function() {
        $(".box-trump-2").removeClass("hide-button", "style.css");
        var audio = document.getElementById("audio-trump-2");
        audio.currentTime = 0;
        audio.play();
        $(".box-trump-2").addClass("shake");
            setTimeout(function () {
                audio.pause();   
                $(".box-trump-2").removeClass("shake");
            }, 1000);
        audio.currentTime = 0;
    }, 0);

    setTimeout(function() {
        $(".box-biden-2").removeClass("hide-button", "style.css");
        var audio = document.getElementById("audio-biden-2");
        audio.currentTime = 0;
        audio.play();
        $(".box-biden-2").addClass("shake");
            setTimeout(function () {
                audio.pause();    
                $(".box-biden-2").removeClass("shake");
            }, 1000);
        audio.currentTime = 0;
    }, 0);

    setTimeout(function() {
        $(".box-trump-3").removeClass("hide-button", "style.css");
        var audio = document.getElementById("audio-trump-3");
        audio.currentTime = 0;
        audio.play();
        $(".box-trump-3").addClass("shake");
            setTimeout(function () {
                audio.pause();   
                $(".box-trump-3").removeClass("shake");
            }, 1000);
        audio.currentTime = 0;
    }, 0);

    setTimeout(function() {
        $(".box-biden-3").removeClass("hide-button", "style.css");
        var audio = document.getElementById("audio-biden-3");
        audio.currentTime = 0;
        audio.play();
        $(".box-biden-3").addClass("shake");
            setTimeout(function () {
                audio.pause();    
                $(".box-biden-3").removeClass("shake");
            }, 1000);
        audio.currentTime = 0;
    }, 0);

    setTimeout(function() {
        $(".box-user-info").removeClass("hide-button", "style.css");
        $(".box-user-info-volume-on").removeClass("hide-button", "style.css");
    }, 1000);

    setTimeout(function() {
        newGame();
    }, 2000);
});

// Turn sound off - source: https://matthewyong.github.io/twufo/index.html
$(".box-user-info-volume-on").on("click", function() {
    $(".box-user-info-volume-on").addClass("hide-button", "style.css");
    $(".box-user-info-volume-off").removeClass("hide-button", "style.css");
    $("audio").prop("muted", true);
});

// Turn sound on - source: https://matthewyong.github.io/twufo/index.html
$(".box-user-info-volume-off").on("click", function() {
    $(".box-user-info-volume-on").removeClass("hide-button", "style.css");
    $(".box-user-info-volume-off").addClass("hide-button", "style.css");
    $("audio").prop("muted", false);
});

// newGame() resets variables, shows userScore and triggers newLevel()
function newGame(){   
    game.level = 3; // Initial round is 3 turns
    game.count = 0;

    game.prev = 0;
    game.next = 0;

    game.showSequenceArr = [];

    showScore(); // Shows userScore (= 0)
    newLevel();
}

// showScore() displays userScore and highScore
function showScore() {
    $('.user-score-count span').text(`Score: `+game.userScore);
    if (game.highScore === null) {
        game.highScore = 0;
    }
    else {
    $('.high-score-count span').text(`High Score: `+game.highScore);
    }
}

// newLevel() resets sequence arrays to 0 so a new sequence can be generated and triggers compTurn()
function newLevel() {
    game.compSequenceArr.length = 0;
    game.userSequenceArr.length = 0;

    compTurn();
}

// compTurn() triggers randSequence() and showSequence()
function compTurn() {
    randSequence();
    showSequence();
}

// randSequence() generates an array with length = number of levels completed
function randSequence(){
    setTimeout(function() {
        for(i=0; i<game.level; i++){
            game.next = (Math.floor(Math.random() * 6));

            while (game.next === game.prev) { // Sequential numbers can't be the same
        		game.next = (Math.floor(Math.random() * 6));
        	}
            
            game.compSequenceArr.push(game.next);
            
            game.prev = game.next;
        }
    }, 250);
}

// showSequence() triggers a boxReact() for each value of the array made by randSequence()
function showSequence(){   
    setTimeout(function() {    
        for(i=0; i<game.compSequenceArr.length; i++) {
            boxReact(i);
        }
    }, 250);
}

 // boxReact() pushes each value in compSequenceArr[] to showSequenceArr[] and triggers correct reaction, then triggers userTurn()
function boxReact(i){
    setTimeout(function () {
        if (game.compSequenceArr[i] == 0) {
            game.showSequenceArr.push(i);
            boxTrumpOne();
        }
        if (game.compSequenceArr[i] == 1) {
            game.showSequenceArr.push(i);
            boxBidenOne();
        }
        if (game.compSequenceArr[i] == 2) {
            game.showSequenceArr.push(i);
            boxTrumpTwo();
        }
        if (game.compSequenceArr[i] == 3) {
            game.showSequenceArr.push(i);
            boxBidenTwo();
        }
        if (game.compSequenceArr[i] == 4) {
            game.showSequenceArr.push(i);
            boxTrumpThree();
        }
        if (game.compSequenceArr[i] == 5) {
            game.showSequenceArr.push(i);
            boxBidenThree();
        }
        if (game.compSequenceArr.length == game.showSequenceArr.length) { // source - https://matthewyong.github.io/twufo/index.html
            setTimeout(function() {
                $(".box-game").css("cursor", "");
                userTurn();
            }, 250);
        }
    }, 1000 * i * game.difficulty); // Time between reactions is a function of difficulty
}


// userTurn() triggers a reaction for the box that the user clicks on, pushes the user input into userSequenceArr[] and triggers compareSequences()
function userTurn() {
    $(".box-game").on("click", function(){
        $(this).addClass("shake");
        $(".box-game").off();
        setTimeout(function() {
            $(".box-game").removeClass("shake");
            $(".box-game").css("cursor", "");
            compareSequences();
        }, 250);
    });
    
    $(".box-trump-1").click(function(){
        game.userSequenceArr.push(0);
        boxTrumpOne();
    });

    $(".box-biden-1").click(function(){
        game.userSequenceArr.push(1);
        boxBidenOne();
    });

    $(".box-trump-2").click(function(){
        game.userSequenceArr.push(2);
        boxTrumpTwo();
    });

    $(".box-biden-2").click(function(){
        game.userSequenceArr.push(3);
        boxBidenTwo();
    });

    $(".box-trump-3").click(function(){
        game.userSequenceArr.push(4);
        boxTrumpThree();
    });

    $(".box-biden-3").click(function(){
        game.userSequenceArr.push(5);
        boxBidenThree();
    });
}

// compareSequences() compares the userSequenceArr[] to the compSequenceArr[] and triggers either gameRetry(), gameContinue() or userTurn()
function compareSequences() {
    if (game.userSequenceArr[game.count] != game.compSequenceArr[game.count]) { // User turn unsuccessful
        
        // incorrectSequence()
        correctValue = game.compSequenceArr[game.count];
        
        var audio = document.getElementById("audio-wwe-bell");
        audio.currentTime = 0;
        setTimeout(function() {
            audio.play();
        }, 500);

        setTimeout(function() {
            if (correctValue == 0) {
                boxTrumpOne();
            }
            if (correctValue == 1) {
                boxBidenOne();
            }
            if (correctValue == 2) {
                boxTrumpTwo();
            }
            if (correctValue == 3) {
                boxBidenTwo();
            }
            if (correctValue == 4) {
                boxTrumpThree();
            }
            if (correctValue == 5) {
                boxBidenThree();
            }
        }, 1500);

        setTimeout(function() {
            if (correctValue == 0) {
                boxTrumpOne();
            }
            if (correctValue == 1) {
                boxBidenOne();
            }
            if (correctValue == 2) {
                boxTrumpTwo();
            }
            if (correctValue == 3) {
                boxBidenTwo();
            }
            if (correctValue == 4) {
                boxTrumpThree();
            }
            if (correctValue == 5) {
                boxBidenThree();
            }
        }, 2600);

        setTimeout(function() {
            if (correctValue == 0) {
                boxTrumpOne();
            }
            if (correctValue == 1) {
                boxBidenOne();
            }
            if (correctValue == 2) {
                boxTrumpTwo();
            }
            if (correctValue == 3) {
                boxBidenTwo();
            }
            if (correctValue == 4) {
                boxTrumpThree();
            }
            if (correctValue == 5) {
                boxBidenThree();
            }
        }, 3700);

        setTimeout(function() {
            $(".box-trump-1").addClass("hide-button", "style.css");
            $(".box-trump-2").addClass("hide-button", "style.css");
            $(".box-trump-3").addClass("hide-button", "style.css");
            $(".box-biden-1").addClass("hide-button", "style.css");
            $(".box-biden-2").addClass("hide-button", "style.css");
            $(".box-biden-3").addClass("hide-button", "style.css");
        }, 4800);

        setTimeout(function() {
            gameRetry();
            $("#game-btn").text("Retry?");
            document.getElementById("modal-difficulty-menu-btn").click();
        }, 5200);
    }
    else {
        if (game.compSequenceArr.length === game.userSequenceArr.length) { // User turn successful - trigger gameContinue()
            calculateScore();
            game.count = 0;
            setTimeout(function() {
                gameContinue();
            }, 250);
        }
        else { // User turn still in progress - trigger userTurn()
            game.count++;
            calculateScore();
            userTurn();
        }
    }
}

// gameRetry() resets score and triggers showScore() (a new game is triggered through the difficulty menu modal)
function gameRetry() {                
    game.userScore = 0;
    showScore();
}

// gameContinue() empties sequence arrays, increases the level and triggers newLevel()
function gameContinue() {
    game.showSequenceArr = [];
    game.userSequenceArr = [];
    game.level++;

    newLevel();
}

// calculateScore() changes scoreMultiplier based on user difficulty input, calculates new user and highscores and triggers showScore() - source: https://www.danpurdy.co.uk/tutorial/simon-says-game-in-jquery-tutorial/
function calculateScore() {

    switch(game.difficulty)
    {
        case "2":
            game.scoreMultiplier=1;
            break;
        
        case "1":
            game.scoreMultiplier=2;
            break;

        case "0.5":
            game.scoreMultiplier = 3;
            break;

        case "0.25":
            game.scoreMultiplier = 4;
            break;
    }
// source - https://phaserjs.com/saving-high-score
    game.scoreIncrease = 1 * game.scoreMultiplier;
    game.userScore += game.scoreIncrease;

    if (game.userScore > game.highScore) {
        game.highScore = game.userScore;
    }

    localStorage.setItem('highScore', game.highScore);

    showScore();
}

// Box reactions are audio clip and CSS shake effect
function boxTrumpOne(){
    var audio = document.getElementById("audio-trump-1");
    audio.currentTime = 0;
    audio.play();
    $(".box-trump-1").addClass("shake");
    $(".box-trump-1").addClass("text-pop");
        setTimeout(function () {
            $(".box-trump-1").removeClass("text-pop");
        }, 450);
        setTimeout(function () {
            audio.pause();   
            $(".box-trump-1").removeClass("shake");
        }, 1000);
    audio.currentTime = 0;
}

function boxBidenOne(){
    var audio = document.getElementById("audio-biden-1");
    audio.currentTime = 0;
    audio.play();
    $(".box-biden-1").addClass("shake");
    $(".box-biden-1").addClass("text-pop");
        setTimeout(function () {
            $(".box-biden-1").removeClass("text-pop");
        }, 450);
        setTimeout(function () {
            audio.pause();    
            $(".box-biden-1").removeClass("shake");
        }, 1000);
    audio.currentTime = 0;
}

function boxTrumpTwo(){
    var audio = document.getElementById("audio-trump-2");
    audio.currentTime = 0;
    audio.play();
    $(".box-trump-2").addClass("shake");
    $(".box-trump-2").addClass("text-pop");
        setTimeout(function () {
            $(".box-trump-2").removeClass("text-pop");
        }, 450);
        setTimeout(function () {
            audio.pause();   
            $(".box-trump-2").removeClass("shake");
        }, 1000);
    audio.currentTime = 0;
}

function boxBidenTwo(){
    var audio = document.getElementById("audio-biden-2");
    audio.currentTime = 0;
    audio.play();
    $(".box-biden-2").addClass("shake");
    $(".box-biden-2").addClass("text-pop");
        setTimeout(function () {
            $(".box-biden-2").removeClass("text-pop");
        }, 450);
        setTimeout(function () {
            audio.pause();    
            $(".box-biden-2").removeClass("shake");
        }, 1000);
    audio.currentTime = 0;
}

function boxTrumpThree(){
    var audio = document.getElementById("audio-trump-3");
    audio.currentTime = 0;
    audio.play();
    $(".box-trump-3").addClass("shake");
    $(".box-trump-3").addClass("text-pop");
        setTimeout(function () {
            $(".box-trump-3").removeClass("text-pop");
        }, 450);
        setTimeout(function () {
            audio.pause();   
            $(".box-trump-3").removeClass("shake");
        }, 1000);
    audio.currentTime = 0;
}

function boxBidenThree(){
    var audio = document.getElementById("audio-biden-3");
    audio.currentTime = 0;
    audio.play();
    $(".box-biden-3").addClass("shake");
    $(".box-biden-3").addClass("text-pop");
        setTimeout(function () {
            $(".box-biden-3").removeClass("text-pop");
        }, 450);
        setTimeout(function () {
            audio.pause();    
            $(".box-biden-3").removeClass("shake");
        }, 1000);
    audio.currentTime = 0;
}