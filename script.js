//variables
let randomNumber = Math.trunc(Math.random() * 20) + 1;
const secretNumber = document.querySelector(".secret-number");
const scoringMessage = document.querySelector(".scoring__message");
const scoreHTML = document.querySelector(".scoring__score");
const highScoreHTML = document.querySelector(".scoring__highScore");
const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");
const win = new Audio("audio/win.mp3");
const fail = new Audio("audio/fail.mp3");
win.preload = "auto";
fail.preload = "auto";
let score = 15;
let highScore = 0;

//check button event
checkBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (score === 0) {
    alert("Start a new game! 😏");
  } else {
    const numberInput = +document.querySelector(".number-input").value;
    if (numberInput < 1 || numberInput > 20) {
      //check if the number is in range
      alert("Please enter a number between 1-20! 🫤");
    } else if (numberInput === randomNumber) {
      //check if the number equals to the random number
      win.play();
      document.querySelector("body").style.backgroundColor = "#60b347";
      secretNumber.style.width = "30rem";
      secretNumber.textContent = numberInput;
      scoringMessage.textContent = "You won the game!🥳🥳🥳";
      if (score > highScore) {
        highScore = score;
        highScoreHTML.textContent = highScore;
      }
    } else {
      //when the number is different from the random number
      scoringMessage.textContent =
        numberInput > randomNumber ? "⬆️ Too high" : "⬇️ Too low";
      if (score > 1) {
        score--;
        scoreHTML.textContent = score;
      } else {
        fail.play();
        score = 0;
        scoreHTML.textContent = score;
        scoringMessage.textContent = "You lost the game!😎😎😎";
      }
    }
  }
});

//again button event
againBtn.addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  secretNumber.textContent = "?";
  scoringMessage.textContent = "Start guessing...";
  score = 15;
  scoreHTML.textContent = score;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number-input").value = "";
  secretNumber.style.width = "15rem";
});
