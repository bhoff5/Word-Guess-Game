
var wins = 0;
var screenWord = [];
var guessWord = "";
var guessesRemaining = 5;
var guessedLetters = [];
var letter;
var wordBank = ["borneo", "tasmania", "great britain", "cuba", "iceland", "sri lanka", "hispaniola", "madagascar", "honshu"]
var mapURL = "";


// key press

initialize()

document.onkeyup = function (event) {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    letter = event.key.toUpperCase()
    checkLetter(letter)
  }
}

function checkLetter(letter) {
  var foundLetter = false;


  for (i = 0; i < guessWord.length; i++) {
    if (guessWord[i] === letter) {
      screenWord[i] = letter;
      foundLetter = true;
      if (!guessedLetters.includes(letter)) {
        guessedLetters.push(letter)
      }
      if (screenWord.join("") === guessWord) {
        wins++;
        $("#message").addClass("animateMessage").text("You Win!")
        setTimeout(function () {
          initialize()
        }, 3000);
      }
    }
  }

  if (!foundLetter && !guessedLetters.includes(letter)) {
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

  if (guessesRemaining === 0) {
    for (i = 0; i < guessWord.length; i++) {
      screenWord[i] = guessWord[i];
    }
    $("#message").addClass("animateMessage").text("You Lose!");
    setTimeout(function () {
      initialize()
    }, 3000);
  }

  display()
}

function initialize() {
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


  display()
}

function display() {
  document.getElementById("screenWord").textContent = screenWord.join("");
  document.getElementById("wins").textContent = wins;
  document.getElementById("guessesRemaining").textContent = guessesRemaining;
  document.getElementById("guessedLetters").textContent = guessedLetters.join(" ");
}

