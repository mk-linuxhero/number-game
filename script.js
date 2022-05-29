const secretNumber = Math.trunc(Math.random() * 20) + 1;
let scores = 20;
let highScore = 0;
let score = document.querySelector(".score");
const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};
let check = document.querySelector(".check");

check.addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  // Not a number
  if (!guess) {
    displayMessage(" ⛔️ Not a number!");
    // Winner
  } else if (guess === secretNumber) {
    displayMessage(" ✅ Correct number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "rgb(34 197 94)";
    if (scores > highScore) {
      if (scores >= 18) {
        scores += 5;
        highScore = scores;
        document.querySelector(".highscore").textContent = highScore;
      }
    }
  } else if (scores > 1) {
    displayMessage(guess > secretNumber ? "Too High" : "Too Low");
    scores--;
    score.textContent = scores;
  } else {
    displayMessage("Game Over!");
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".number").textContent = "?";
  const secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").value = "";
  displayMessage("Start Guessing!");
  score.textContent = 0;
  document.querySelector(".highscore").textContent = 0;
  document.querySelector("body").style.backgroundColor = "#222";
});
