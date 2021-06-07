// A function that will randomly return either 'Rock', 'Paper' or 'Scissors'
function computerPlay() {
  let answers = ["Rock", "Paper", "Scissors"];
  return answers[Math.floor(Math.random() * answers.length)];
}

// A function that plays a single round of Rock Paper Scissors.
function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  if (playerSelection == "rock" && computerSelection == "Paper") {
    return "You lose! " + "Paper beats Rock";
  } else if (playerSelection == "rock" && computerSelection == "Rock") {
    return "Tie!";
  } else if (playerSelection == "rock" && computerSelection == "Scissors") {
    return "You win! " + "Rock beats Scissors";
  } else if (playerSelection == "paper" && computerSelection == "Rock") {
    return "You win! " + "Paper beats Rock";
  } else if (playerSelection == "paper" && computerSelection == "Paper") {
    return "Tie!";
  } else if (playerSelection == "paper" && computerSelection == "Scissors") {
    return "You lose! " + "Scissors beats Paper";
  } else if (playerSelection == "scissors" && computerSelection == "Rock") {
    return "You lose! " + "Rock beats Scissors";
  } else if (playerSelection == "scissors" && computerSelection == "Paper") {
    return "You win! " + "Scissors beats Paper";
  } else if (playerSelection == "scissors" && computerSelection == "Scissors") {
    return "Tie!";
  } else {
    return "Please throw a valid handsign!";
  }
}

// Added functionality to buttons and outputs results to Results div and score to Score div

const gameResults = document.querySelector(".results");

// Play Rock
const rockButton = document.querySelector("#btnRock");
rockButton.addEventListener("click", () => {
  const playRock = playRound("rock", computerPlay);
  gameResults.innerText = playRock;
  if (gameResults.innerText.indexOf("win") !== -1) {
    ++playerWins;
  } else if (gameResults.innerText.indexOf("lose") !== -1) {
    ++computerWins;
  }
});

// Play Paper
const paperButton = document.querySelector("#btnPaper");
paperButton.addEventListener("click", () => {
  const playPaper = playRound("paper", computerPlay);
  gameResults.innerText = playPaper;
  if (gameResults.innerText.indexOf("win") !== -1) {
    ++playerWins;
  } else if (gameResults.innerText.indexOf("lose") !== -1) {
    ++computerWins;
  }
});

// Play Scissors
const scissorsButton = document.querySelector("#btnScissors");
scissorsButton.addEventListener("click", () => {
  const playScissors = playRound("scissors", computerPlay);
  gameResults.innerHTML = playScissors;
  if (gameResults.innerText.indexOf("win") !== -1) {
    ++playerWins;
  } else if (gameResults.innerText.indexOf("lose") !== -1) {
    ++computerWins;
  }
});

// Track the score in Score div and ends if player or computer reaches 5 points
let playerWins = 0;
let computerWins = 0;

window.addEventListener("click", () => {
  const scoreTracker =
    "Human score: " + playerWins + "\nComputer score: " + computerWins;

  const score = document.querySelector(".score");
  score.innerText = scoreTracker;

  if (playerWins >= 5) {
    gameResults.innerText = "You WON!";
    score.innerText = "Play again?\n";
    replayDiv.appendChild(replay);
  } else if (computerWins >= 5) {
    gameResults.innerText = "Game over! You lose!";
    playerWins = -9999;
    score.innerText = "Play again?\n";
    replayDiv.appendChild(replay);
  }
});

// Replay button
const replayDiv = document.querySelector(".replayDiv");
const replay = document.createElement("button");
replay.classList.add("replayButton");
replay.addEventListener("click", () => {
  window.location.reload();
});
replay.innerText = "Restart";
