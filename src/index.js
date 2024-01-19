// select elements from HTML
const scoreCounter = document.querySelector(".score-no");
const grid = document.querySelector(".grid");
const endGameScreen = document.querySelector(".game-over-screen");
const endGameText = document.querySelector(".game-over-text");
const playAgainBtn = document.querySelector("#play-again-btn");

// variables required for game set-up
const totalCells = 100;
const totalBombs = 10;
const maxScore = totalCells - totalBombs;
const bombsList = [];

let score = 0;

// generates a list of unique bombs
while (bombsList.length < totalBombs) {
  // random number
  const randomNumber = Math.floor(Math.random() * totalCells) + 1;

  // adds number to list if not already included
  if (!bombsList.includes(randomNumber)) {
    bombsList.push(randomNumber);
  }
}

for (let i = 1; i <= totalCells; i++) {
  // creates a cell
  const cell = document.createElement("div");
  cell.classList.add("cell");

  //  "click" event for the cell
  cell.addEventListener("click", function () {
    // don't do anything if it is already clicked
    if (cell.classList.contains("cell-clicked")) {
      return;
    }
    if (bombsList.includes(i)) {
      cell.classList.add("cell-bomb");
      endGame(false);
    } else {
      cell.classList.add("cell-clicked");
      updateScore();
    }
  });

  // puts cell in the grid
  grid.appendChild(cell);
}

// function: increments score and display
function updateScore() {
  score++;
  scoreCounter.innerText = score.toString().padStart(5, "0");

  if (score === maxScore) {
    endGame(true);
  }
}

// function: when game ends
function endGame(isVictory) {
  if (isVictory) {
    endGameText.innerHTML = "YOU <br /> WON";
    endGameScreen.classList.add("win");
  }
  revealAll();
  endGameScreen.classList.remove("hidden");
}

// function: reveals all bombs
function revealAll() {
  const cells = document.querySelectorAll(".cell");

  for (let i = 1; i <= cells.length; i++) {
    const cell = cells[i - 1];

    if (bombsList.includes(i)) {
      cell.classList.add("cell-bomb");
    }
  }
}

playAgainBtn.addEventListener("click", function () {
  window.location.reload();
});
