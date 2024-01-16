const scoreCounter = document.querySelector(".score-no");
const grid = document.querySelector(".grid");
const endGameScreen = document.querySelector(".game-over-screen");
const endGameText = document.querySelector(".game-over-text");
const playAgain = document.querySelector("#play-again-btn");

const totalCells = 100;
const totalBombs = 90;
const maxScore = 5;
const bombList = [];

let score = 0;

for (let i = 1; i <= 100; i++) {
  const cell = document.createElement("div");
  cell.classList.add(".cell");

  cell.addEventListener("click", function () {});

  grid.appendChild(cell);
}
