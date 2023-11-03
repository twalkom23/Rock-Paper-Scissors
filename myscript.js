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

let playerMove = "Rock";


function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Rock") {
        return "Draw! You both selected Rock!";
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "Computer Wins! Paper beats Rock!";
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "Player Wins! Rock beats Scissors!";
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return "Player Wins! Paper beats Rock!";
    }
    else if (playerSelection == "Paper" && computerSelection == "Paper") {
        return "Draw! You both selected Paper!";
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return "Computer Wins! Scissors beats Paper!";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return "Computer Wins! Rock beats Scissors";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return "Player Wins! Scissors beats Paper";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        return "Draw! You both selected Scissors!"
    }
    else {
        return "Invalid Input";
    }  
}









