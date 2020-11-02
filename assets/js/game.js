// Game variables
var game = {
    level: 0,
    count: 0,
    userScore: 0,
    highScore: 0,
    difficulty: 1,

    scoreMultiplier: 1,
    scoreIncrease: 1,

    prev: 0,
    next: 0,

    compSequenceArr: [],
    showSequenceArr: [],
    userSequenceArr: [],
}

// When page loads, animate background images and trigger difficulty menu
onload = function() {
    setTimeout(function() {
        $(".img-container-trump-initial").addClass("trump-slide");
        $(".img-container-biden-initial").addClass("biden-slide");
    }, 1000);
    setTimeout(function() {
        document.getElementById("modal-difficulty-menu-btn").click();
    }, 2000);
}

// When start button is clicked set difficulty, animate game boxes, animate user info boxes and trigger new game
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

    // TESTING - delete later
    // console.log("start");
    // console.log(game.difficulty);
});

// Turn sound off
$(".box-user-info-volume-on").on("click", function() {
        $(".box-user-info-volume-on").addClass("hide-button", "style.css");
        $(".box-user-info-volume-off").removeClass("hide-button", "style.css");
        $("audio").prop("muted", true);
    });

// Turn sound on
$(".box-user-info-volume-off").on("click", function() {
        $(".box-user-info-volume-on").removeClass("hide-button", "style.css");
        $(".box-user-info-volume-off").addClass("hide-button", "style.css");
        $("audio").prop("muted", false);
    });

// 
function newGame(){   
    game.level = 1; //Resets game variables
    game.count = 1;

    game.prev = 0;
    game.next = 0;

    game.showSequenceArr = [];

    showScore(); //Shows userScore (= 0)
    newLevel(); //Calls new level
    
    // TESTING - delete later
    // console.log("newGame");
    // console.log("NEW GAME", "Level:", game.level, "Count:", game.count);
    // console.log("comp", game.compSequenceArr, "show", game.showSequenceArr, "user", game.userSequenceArr);    
}

function showScore() {
    $('.user-score-count span').text(`Score: `+game.userScore);
    $('.high-score-count span').text(`High Score: `+game.highScore);
    
    // TESTING - delete later
    // console.log("showScore");
    }

function newLevel() {
    game.compSequenceArr.length = 0; //Resets arrays to 0 so new sequence can be generated
    game.userSequenceArr.length = 0;

    compTurn(); //Calls a computer turn

    // TESTING - delete later
    // console.log("newLevel");
}

function compTurn() {
    randSequence(); //Calls random sequence to be generated
    showSequence(); //Shows the random sequence
}

function randSequence(){
    setTimeout(function() {
        for(i=0; i<game.level; i++){ //Generates an array with length = number of levels completed
            game.next = (Math.floor(Math.random() * 6));

            while (game.next === game.prev) {
        		game.next = (Math.floor(Math.random() * 6));
        	}
            
            game.compSequenceArr.push(game.next);
            
            game.prev = game.next;
        }
    }, 250);

    // TESTING - delete later
    // console.log("randSequence");
}

 function showSequence(){   
    setTimeout(function() {    
        for(i=0; i<game.compSequenceArr.length; i++) {
            boxReact(i); //Triggers a reaction for each value of the array made by randSequence()
        }
    }, 250);

    // TESTING - delete later
    // console.log("showSequence");
    console.log("COMP TURN", "Level:", game.level, "Count:", game.count);
    console.log("comp", game.compSequenceArr, "show", game.showSequenceArr, "user", game.userSequenceArr);
}

function boxReact(i){
    setTimeout(function () {
        if (game.compSequenceArr[i] == 0) {
            game.showSequenceArr.push(i); //Pushes each randomly generated value in compSequenceArr[] to showSequenceArr[]
            boxTrumpOne(); //Triggers corresponding box reaction so correct sequence is displayed
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
        if (game.compSequenceArr.length == game.showSequenceArr.length) { //When the full sequence has been displayed, userTurn() is called
            setTimeout(function() {
                $(".box-game").css("cursor", "");
                userTurn();
            }, 250);
        }
    }, 1000 * i * game.difficulty);
}

function userTurn() {
    $(".box-game").on("click", function(){
        $(this).addClass("shake"); //Generates a reaction for the box that the user clicks on
        $(".box-game").off();
        setTimeout(function() {
            $(".box-game").removeClass("shake");
            $(".box-game").css("cursor", "");
            compareSequences(); //Compares the userSequenceArr[] to the compSequenceArr[]
        }, 250);
    });
    
    $(".box-trump-1").click(function(){ //Pushes the user input into userSequenceArr[]
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

    // TESTING - delete later
    // console.log("userTurn");
    console.log("USER TURN", "Level:", game.level, "Count:");
    console.log("comp", game.compSequenceArr, "show", game.showSequenceArr, "user", game.userSequenceArr);
}

function compareSequences() {
        if (game.userSequenceArr[game.count] != game.compSequenceArr[game.count]) { //User turn unsuccessful
            //Add CSS reaction later
            setTimeout(function() {
                $(".box-trump-1").addClass("hide-button", "style.css");
                $(".box-trump-2").addClass("hide-button", "style.css");
                $(".box-trump-3").addClass("hide-button", "style.css");
                $(".box-biden-1").addClass("hide-button", "style.css");
                $(".box-biden-2").addClass("hide-button", "style.css");
                $(".box-biden-3").addClass("hide-button", "style.css");
            }, 500);
            setTimeout(function() {
                gameRetry();
                document.getElementById("modal-difficulty-menu-btn").click(); // Click on the checkbox
            }, 1000);
        }
        else {
            if (game.userSequenceArr.length == game.compSequenceArr.length) { //User turn successful
                //Add CSS reaction later
                game.count = 0;
                calculateScore();
                setTimeout(function() {
                    gameContinue();
                }, 250);
            }
            else { //User turn still in progress
                //Add CSS reaction later
                game.count++;
                calculateScore();
                userTurn();
            }
        }

        // TESTING - delete later
        // console.log("compareSequences");
        console.log("COMPARE SEQUENCES", "Level:", game.level, "Count:");
        console.log("comp", game.compSequenceArr, "show", game.showSequenceArr, "user", game.userSequenceArr);

    }

//Game outcomes
function gameRetry() {                
    game.userScore = 0;
    showScore();

    // TESTING - delete later
    // console.log("gameOver");
    console.log("GAME OVER", "Level:", game.level, "Count:", game.count);
    console.log("comp", game.compSequenceArr, "show", game.showSequenceArr, "user", game.userSequenceArr);
}

function gameContinue() {
    game.showSequenceArr = [];
    game.userSequenceArr = [];
    game.level++;

    // TESTING - delete later
    // console.log("gameContinue");
    console.log("GAME CONTINUE", "Level:", game.level, "Count:", game.count);
    console.log("comp", game.compSequenceArr, "show", game.showSequenceArr, "user", game.userSequenceArr);

    newLevel();
}

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

    game.scoreIncrease = 1 * game.scoreMultiplier;
    game.userScore += game.scoreIncrease;

    if (game.userScore > game.highScore) {
        game.highScore = game.userScore;
    }

    showScore();

    // TESTING - delete later
    // console.log("calculateScore");
}

//Reactions are audio clip and CSS shake effect
function boxTrumpOne(){
    var audio = document.getElementById("audio-trump-1");
    audio.currentTime = 0;
    audio.play();
    $(".box-trump-1").addClass("shake");
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
        setTimeout(function () {
            audio.pause();    
            $(".box-biden-3").removeClass("shake");
        }, 1000);
    audio.currentTime = 0;
}