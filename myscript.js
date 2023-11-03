//creates the computers rock, paper, scissors choice at random
function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3) + 1;
    if (compChoice === 1) {
        return "rock";
    }
    else if (compChoice === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}




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
        return "Invalid Input, Please try only enter the correct words.";
    }  
}

//Creates the game using the above functions that runs through 5 times and keeps score, finally declaring a winner.
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playerMove;

    for (var i = 0; i < 5; i++) {
    let userAnswer = prompt("Please enter rock, paper or scissors: ");
    playerMove = userAnswer.toLowerCase();
    let round = playRound(playerMove, getComputerChoice());
    let firstLetter = round[0];
    console.log(`Round ${i + 1} `);
    if (firstLetter == "D"){
    }
    else if (firstLetter == "C") {
        computerScore++;
    }
    else if (firstLetter == "P") {
        playerScore++;
    }
    else {
        i--;
    }
    
    console.log(round);
    console.log(`Player Score = ${playerScore}`);
    console.log(`Computer Score = ${computerScore}`);    
}
if (playerScore > computerScore) {
    console.log("User Wins!");
   
}
else if (playerScore < computerScore) {
    console.log("Computer Wins!");
    
}
else {
    console.log(`Draw!`)
}
console.log("Final Score");
console.log(`User: ${playerScore}`);
console.log(`Computer: ${computerScore}`);
}


























