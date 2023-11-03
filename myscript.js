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

let result = getComputerChoice();
alert(result)



