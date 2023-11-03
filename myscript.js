//creates the computers rock, paper, scissors choice at random
function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3) + 1;
    if (compChoice === 1) {
        return "Rock";
    }
    else if (compChoice === 2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

let playerMove = "ROCK";


//Creating the Play round function to compare the players moves and giving a winner.
function playRound(playerSelection, computerSelection) {
    //Changing the selection to lower case to improve the likelihood the game isnt invalid
    let playerSelection1 = playerSelection.toLowerCase();
    let computerSelection1 = computerSelection.toLowerCase();
    //Comparing moves to declare a winner
    if (playerSelection1 == "rock" && computerSelection1 == "rock") {
        return "Draw! You both selected Rock!";
    }
    else if (playerSelection1 == "rock" && computerSelection1 == "paper") {
        return "Computer Wins! Paper beats Rock!";
    }
    else if (playerSelection1 == "rock" && computerSelection1 == "scissors") {
        return "Player Wins! Rock beats Scissors!";
    }
    else if (playerSelection1 == "paper" && computerSelection1 == "rock") {
        return "Player Wins! Paper beats Rock!";
    }
    else if (playerSelection1 == "paper" && computerSelection1 == "paper") {
        return "Draw! You both selected Paper!";
    }
    else if (playerSelection1 == "paper" && computerSelection1 == "scissors") {
        return "Computer Wins! Scissors beats Paper!";
    }
    else if (playerSelection1 == "scissors" && computerSelection1 == "rock") {
        return "Computer Wins! Rock beats Scissors";
    }
    else if (playerSelection1 == "scissors" && computerSelection1 == "paper") {
        return "Player Wins! Scissors beats Paper";
    }
    else if (playerSelection1 == "scissors" && computerSelection1 == "scissors") {
        return "Draw! You both selected Scissors!"
    }
    else {
        return "Invalid Input";
    }  
}










