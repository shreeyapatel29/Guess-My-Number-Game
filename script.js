"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

// document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // If guess empty
  if (!guess) {
    document.querySelector(".message").textContent = "No Number!";
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "Perfect! Correct number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    // When set new highScore
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
      document.querySelector(".message").textContent = "New HighScore! Yipee!";
    }
  }
  // guess > secretnumber
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost, Try Again";
      document.querySelector(".score").textContent = 0;
    }
  } // guess < scretnumber
  else if (guess < secretNumber) {
    // for score > 0
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } // for score < 0
    else {
      document.querySelector(".message").textContent = "You Lost, Try Again";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Play Again Code
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").value = " ";
  document.querySelector(".message").textContent = "Start guessing";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
