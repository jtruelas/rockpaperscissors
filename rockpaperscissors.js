console.log("Welcome to Rock Paper Scissors!");

function getComputerChoice () {
    
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice == 0) {
        return "Rock";
    }
    else if (computerChoice == 1) {
        return "Paper";
    }
    else if (computerChoice == 2) {
        return "Scissors";
    }
    else {
        return "Error";
    }
}

console.log(getComputerChoice());
