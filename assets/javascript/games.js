


var wins = 0;
var screenWord = [];
var guessWord = "";
var guessesRemaining = 5;
var guessedLetters = [];
var letter;
var wordBank = ["borneo", "tasmania", "great britain", "cuba", "iceland", "sri lanka", "hispaniola", "madagascar", "honshu", "taiwan", "baffin island", "ireland", "new guinea"]
var mapURL = "";
var pause = false;


initialize()

//key press
document.onkeyup = function (event) {
  if (event.keyCode >= 65 && event.keyCode <= 90 && pause === false) {
    letter = event.key.toUpperCase();
    checkLetter(letter);
    var audio = new Audio("assets/sounds/key-new-01.wav");
    audio.play();
  }
  if (event.keyCode === 13) {
    $("#tutorial").addClass("tutorial").text("")
  }
}

function checkLetter(letter) {
  var foundLetter = false;

  // Win game
  for (i = 0; i < guessWord.length; i++) {
    if (guessWord[i] === letter) {
      screenWord[i] = letter;
      foundLetter = true;
      if (!guessedLetters.includes(letter)) {
        guessedLetters.push(letter)
      }
      if (screenWord.join("") === guessWord) {
        wins++;
        $("#message").addClass("animateMessage").text("You Win!");
        pause = true;
        var audio = new Audio("assets/sounds/winsound.mp3");
        audio.play();
        setTimeout(function () {
          initialize()
        }, 3000);
      }
    }
  }

  // Wrong answer
  if (!foundLetter && !guessedLetters.includes(letter) && guessesRemaining > 0) {
    foundLetter = false;
    guessesRemaining--
    guessedLetters.push(letter)
    if (guessesRemaining <= 4) {
      document.getElementById("coconuts").style.display = "none";
    }
    if (guessesRemaining <= 3) {
      document.getElementById("leftleaves").style.display = "none";
    }
    if (guessesRemaining <= 2) {
      document.getElementById("rightleaves").style.display = "none";
    }
    if (guessesRemaining <= 1) {
      document.getElementById("treetrunk").style.display = "none";
    }
    if (guessesRemaining <= 0) {
      document.getElementById("island").style.display = "none";
    }
  }

  // Lose game loop

  if (guessesRemaining === 0) {
    for (i = 0; i < guessWord.length; i++) {
      screenWord[i] = guessWord[i];
    }
    $("#message").addClass("animateMessage").text("You Lose!");
    pause = true;
    var audio = new Audio("assets/sounds/losesound.wav");
    audio.play();
    setTimeout(function () {
      initialize()
    }, 3000);
  }

  display()
}

//initialize
function initialize() {
  pause = false;
  guessesRemaining = 5;
  screenWord = [];
  guessWord = wordBank[Math.floor(Math.random() * wordBank.length)].toUpperCase()
  $("#map").empty()
  $("#message").removeClass("animateMessage").text("")


  document.getElementById("coconuts").style.display = "";
  document.getElementById("leftleaves").style.display = "";
  document.getElementById("rightleaves").style.display = "";
  document.getElementById("treetrunk").style.display = "";
  document.getElementById("island").style.display = "";


  for (i = 0; i < guessWord.length; i++) {
    if (guessWord[i] === " ") {
      screenWord[i] = " "
    }
    else (screenWord[i] = "_")
  }
  guessedLetters = [];


  if (guessWord === "BORNEO") {
    $("#map").append("<img src=\"assets/images/borneo.png\">")
  }
  if (guessWord === "TASMANIA") {
    $("#map").append("<img src=\"assets/images/tasmania.png\">")
  }
  if (guessWord === "GREAT BRITAIN") {
    $("#map").append("<img src=\"assets/images/great_britain.png\">")
  }
  if (guessWord === "CUBA") {
    $("#map").append("<img src=\"assets/images/cuba.png\">")
  }
  if (guessWord === "ICELAND") {
    $("#map").append("<img src=\"assets/images/iceland.png\">")
  }
  if (guessWord === "SRI LANKA") {
    $("#map").append("<img src=\"assets/images/sri_lanka.png\">")
  }
  if (guessWord === "HISPANIOLA") {
    $("#map").append("<img src=\"assets/images/hispaniola.png\">")
  }
  if (guessWord === "MADAGASCAR") {
    $("#map").append("<img src=\"assets/images/madagascar.png\">")
  }
  if (guessWord === "HONSHU") {
    $("#map").append("<img src=\"assets/images/honshu.png\">")
  }
  if (guessWord === "TAIWAN") {
    $("#map").append("<img src=\"assets/images/taiwan.png\">")
  }
  if (guessWord === "BAFFIN ISLAND") {
    $("#map").append("<img src=\"assets/images/baffin_island.png\">")
  }
  if (guessWord === "IRELAND") {
    $("#map").append("<img src=\"assets/images/ireland.png\">")
  }
  if (guessWord === "NEW GUINEA") {
    $("#map").append("<img src=\"assets/images/new_guinea.png\">")
  }

  display()
}

function display() {
  document.getElementById("screenWord").textContent = screenWord.join("");
  document.getElementById("wins").textContent = wins;
  document.getElementById("guessesRemaining").textContent = guessesRemaining;
  document.getElementById("guessedLetters").textContent = guessedLetters.join(" ");
}

