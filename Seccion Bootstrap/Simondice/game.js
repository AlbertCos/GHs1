prompt("Hello");

var buttonColours=["red", "blue", "green","yellow"];
var gamePattern = [];
var userClickedPattern=[];

$(".btn").click(function(){
var userChosenColour =  $(this).attr("id");
playsound(userChosenColour);
userClickedPattern.push(userChosenColour);
console.log(userClickedPattern);
nextSequence();
});

function playsound(name){

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
};

function nextSequence(){

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);


  $(document). ready(() => {
    setInterval(() => {
    $("#" + randomChosenColour). fadeIn();
    $("#" + randomChosenColour). fadeOut();
    }, 100);
  });

  playsound(randomChosenColour);
};

nextSequence();
