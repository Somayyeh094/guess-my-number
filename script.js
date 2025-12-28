let randomNumber = Math.trunc(Math.random() * 20) + 1;
const secretNumber = document.querySelector(".secret-number");
const scoringMessage = document.querySelector(".scoring__message");
const scoreHTML = document.querySelector(".scoring__score");
const highScoreHTML = document.querySelector(".scoring__highScore");
const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");
let score = 15;
let highScore = 0;

checkBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const numberInput = +document.querySelector(".number-input").value;
  if (numberInput === randomNumber) {
    new Audio("audio/win.mp3").play();
    document.querySelector("body").style.backgroundColor = "#60b347";
    secretNumber.style.width = "30rem";
    secretNumber.textContent = numberInput;
    scoringMessage.textContent = "You won the game!🥳🥳🥳";
    if (score > highScore) highScoreHTML.textContent = score;
  } else {
    scoringMessage.textContent =
      numberInput > randomNumber ? "⬆️ Too high" : "⬇️ Too low";
    if (score > 1) {
      score--;
      scoreHTML.textContent = score;
    } else {
      new Audio("audio/fail.mp3").play();
      scoringMessage.textContent = "You lost the game!😎😎😎";
    }
  }
});

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
