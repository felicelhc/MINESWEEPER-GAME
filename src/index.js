const scoreCounter = document.querySelector(".score-no");
const grid = document.querySelector(".grid");
const endGameScreen = document.querySelector(".game-over-screen");
const endGameText = document.querySelector(".game-over-text");
const playAgainBtn = document.querySelector("#play-again-btn");

const totalCells = 100;
const totalBombs = 10;
const maxScore = 100;
const bombList = [];

let score = 0;

function updateScore() {
  score++;
  scoreCounter.innerText = score.toString().padStart(5, "0");

  if (score === maxScore) {
    endGame(true);
  }
}

for (let i = 1; i <= 100; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.classList.add("cell-bomb");

  cell.addEventListener("click", function () {
    if (bombsList.includes(i)) {
      cell.classList.add("cell-bomb");
      endGame();
    }
    cell.classList.add("cell-clicked");
    updateScore();
  });

  grid.appendChild(cell);
}

while (bombsList.length < totalBombs) {
  const randomNumber = Math.floor(Math.random() * totalCells) + 1;

  if (!bombsList.includes(randomNumber)) {
    bombsList.push(randomNumber);
  }
}

function endGame(isVictory) {
  if (isVictory) {
    endGameText.innerHTML = "YOU <br /> WON";
    endGameScreen.classList.add("win");
  }
  endGameScreen.classList.remove("hidden");
}

playAgainBtn.addEventListener("click", function () {
  window.location.reload();
});
