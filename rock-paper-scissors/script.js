// Define variables to keep track of scores
let player1Score = 0;
let player2Score = 0;

// Get player buttons
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

// Get result paragraph
const resultParagraph = document.getElementById("result");

// Get score elements
const player1ScoreElement = document.getElementById("player1Score");
const player2ScoreElement = document.getElementById("player2Score");

// Get reset button
const resetButton = document.getElementById("reset");

// Function to generate the computer's choice
function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to determine the winner of a round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    player1Score++;
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    player2Score++;
    return `Computer wins! ${computerSelection} beats ${playerSelection}.`;
  }
}

// Function to update the score
function updateScore() {
  player1ScoreElement.textContent = player1Score;
  player2ScoreElement.textContent = player2Score;
}

// Function to reset the game
function resetGame() {
  player1Score = 0;
  player2Score = 0;
  updateScore();
  resultParagraph.textContent = "Choose an option...";
}

// Add click event listeners to player buttons
rockButton.addEventListener("click", () => {
  const playerSelection = "Rock";
  const computerSelection = computerPlay();
  const result = playRound(playerSelection, computerSelection);
  resultParagraph.textContent = result;
  updateScore();
});

paperButton.addEventListener("click", () => {
  const playerSelection = "Paper";
  const computerSelection = computerPlay();
  const result = playRound(playerSelection, computerSelection);
  resultParagraph.textContent = result;
  updateScore();
});

scissorsButton.addEventListener("click", () => {
  const playerSelection = "Scissors";
  const computerSelection = computerPlay();
  const result = playRound(playerSelection, computerSelection);
  resultParagraph.textContent = result;
  updateScore();
});

// Add click event listener to reset button
resetButton.addEventListener("click", resetGame);
