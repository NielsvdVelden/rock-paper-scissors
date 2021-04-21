// Create a function called computerPlay that will randomly return either 'Rock', 'Paper' or 'Scissors'
function computerPlay() {
  let answers = ["Rock", "Paper", "Scissors"];
  return answers[Math.floor(Math.random() * answers.length)];
}

// Write a function that plays a single round of Rock Paper Scissors.
function playRound(playerSelection, computerSelection) {
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

// A function that uses the previous function to play a 5 round game that keeps score and reports a winner or loser at the end.

let playerWins = 0;
let computerWins = 0;

function game() {
  let gameNumber;
  for (gameNumber = 0; gameNumber < 6; gameNumber++) {
    let playerInput = prompt("Throw a handsign! \n (Rock, Paper or Scissors)");
    const playerSelection = playerInput.toLocaleLowerCase();
    const computerSelection = computerPlay();
    console.log("GAME " + gameNumber + ":");
    console.log("Player selection: " + playerSelection);
    console.log("Computer selection: " + computerSelection);
    console.log("\n");
    console.log(playRound(playerSelection, computerSelection));
    console.log("\n");

    let roundResult = playRound(playerSelection, computerSelection);

    if (roundResult.search("You win! ") > -1) {
      ++playerWins;
    } else if (roundResult.search("You lose! ") > -1) {
      ++computerWins;
    }

    console.log("Player wins: " + playerWins);
    console.log("Computer wins: " + computerWins);
    console.log("\n");

    if (playerWins >= 3 && computerWins < 2) {
      console.log("Game Over. You Win!");
    } else if (playerWins < 2 && computerWins >= 3) {
      console.log("Game Over. You Lose!");
    } else if (gameNumber >= 5 && playerWins < 3 && computerWins < 3) {
      console.log("It's a tie! Try again.");
    }
  }
}
