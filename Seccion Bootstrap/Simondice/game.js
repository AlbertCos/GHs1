
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  playsound(userChosenColour);
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour);
});

$(document).keypress(function(){
  if(started ==false){
    $("h1").text("Level " + level);
    nextSequence();
    started == true;
  }

});

function animatePress(currentColour) {

  $("#" + currentColour).addClass("pressed");
  setTimeout(function(){

    $("#" + currentColour).removeClass("pressed");
  },100);

};

function playsound(name) {

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
};

function nextSequence() {

  level=+1;
  $("h1").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playsound(randomChosenColour);

   return (lvl);
};
