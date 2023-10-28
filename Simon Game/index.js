var buttoncolor = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

function nextsequence() {

    userClickedPattern = [];
    level++;

    $("#level-title").text("Level "+ level);

    var randomnumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttoncolor[randomnumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

$(".btn").on("click", function () {
    
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatecolor(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
});

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatecolor(currentcolor){
    $("#" + currentcolor).addClass("pressed");
    setTimeout(function(){
        $("#" + currentcolor).removeClass("pressed");
    }, 100);
}

$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level " + level);
        nextsequence();
        started = true;
    }
});
function checkAnswer(currentlevel){
    if(userClickedPattern[currentlevel] === gamePattern[currentlevel]){
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextsequence();
            },1000);
        }
    }else{
        var Wrong = "wrong";
        playSound(Wrong);
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("#level-title").text("Game Over, Press Any Key To Restart Again");
        startover();
    }
}

function startover(){
    level = 0;
    gamePattern = [];
    started = false;
}