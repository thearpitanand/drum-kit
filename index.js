var numberOfDrumsKeys = document.querySelectorAll(".drum").length;

//Event listener when clicks happen.
for (var i = 0; i < numberOfDrumsKeys; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInHTML = this.innerHTML;
    // console.log(buttonInHTML);
    playDrum(buttonInHTML);
    addPressedAnimation(buttonInHTML);
  });
}

//Event listener when buttons are pressed.
document.addEventListener("keydown", function (event) {
  var pressedKey = event.key;
  // console.log(buttonInHTML);
  playDrum(pressedKey);
  addPressedAnimation(pressedKey);
});

//Function to play the drum sound according to the key Pressed.
function playDrum(keyPressed) {
  switch (keyPressed) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      console.log("Invalid Key Pressed!!");
  }
}

function addPressedAnimation(keyPressed) {
  var buttonLocation = document.querySelector("." + keyPressed);
  buttonLocation.classList.add("pressed");
  setTimeout(function () {
    buttonLocation.classList.remove("pressed");
  },100);
}
