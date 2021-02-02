var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
  if (started == false) {
    $("h1").text("Level " + level);
    nextSequence();
    started = true;
  }

});

$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playsound(userChosenColour);

  animatePress(userChosenColour);
  checkanswer(userClickedPattern.length - 1);
});



function animatePress(currentColour) {

  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);

};

function playsound(name) {

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
};

function nextSequence() {

  userClickedPattern = [];
  level++;
  $("h1").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playsound(randomChosenColour);

};

function checkanswer(currentlevel) {

  if (userClickedPattern[currentlevel] === gamePattern[currentlevel]) {

    console.log("success");

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
    playsound("wrong");

    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Pres Any key to restart");
    startOver();
  }
}

function startOver(){
  level = 0;
  gamePattern=[];
  started=false;
}
