// Create a function called computerPlay that will randomly return either 'Rock', 'Paper' or 'Scissors'

function computerPlay() {
    let answers = ["Rock", "Paper", "Scissors"];
    return answers[Math.floor(Math.random() * answers.length)];
}

// Write a function that plays a single round of Rock Paper Scissors. 
function playRound (playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "Paper") {
        return ("You lose! Paper beats Rock");
    } else if (playerSelection == "rock" && computerSelection == "Rock") {
        return ("Tie!");
    } else if (playerSelection == "rock" && computerSelection == "Scissors") {
        return ("You win! Rock beats Scissors");
    } else if (playerSelection == "paper" && computerSelection == "Rock") {
        return ("You win! Paper beats Rock");
    } else if (playerSelection == "paper" && computerSelection == "Paper") {
        return ("Tie!");
    } else if (playerSelection == "paper" && computerSelection == "Scissors") {
        return ("You lose! Scissors beats Paper");
    } else if (playerSelection == "scissors" && computerSelection == "Rock") {
        return ("You lose! Rock beats Scissors");
    } else if (playerSelection == "scissors" && computerSelection == "Paper") {
        return ("You win! Scissors beats Paper");
    } else if (playerSelection == "scissors" && computerSelection == "Scissors") {
        return ("Tie!");
    } else {
        return ("Please throw a valid handsign!");
    }
}

// Testing
let playerInput = prompt("Throw a handsign! \n (Rock, Paper or Scissors)");
const playerSelection = playerInput.toLocaleLowerCase();
const computerSelection = computerPlay();
console.log ("Player selection: " + playerSelection);
console.log("Computer selection: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));
