prompt("Hello");

var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  playsound(userChosenColour);
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
  animatePress(userChosenColour);
  nextSequence();
});

function animatePress(currentColour) {
  setTimeout(function() {
    $("#" + currentColour).addClass("pressed");
  }, 100);

  setTimeout(function(){
    $("#" + currentColour).removeClass("pressed");
  },200);

};

function playsound(name) {

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
};

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playsound(randomChosenColour);
};
