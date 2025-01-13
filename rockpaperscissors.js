let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    
    let computerChoice = Math.floor(Math.random() * 3);

    // 0 = rock, 1 = paper, 2 = scissors

    return computerChoice;
}

/* Legacy function prior to ui addition
function getHumanChoice () {
    
    let humanChoice = prompt("Pick one, Rock, Paper, Scissors: ").toLowerCase();

    return humanChoice;
}
*/

function playRound(humanChoice, computerChoice) {

    // convert computerChoice to text
    if (computerChoice == 0) {
        computerChoice = "rock";
    }
    else if (computerChoice == 1) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }

    // create end game messages
    let winMessage = `You win! You chose ${humanChoice}! I chose ${computerChoice}!`;
    let loseMessage = `You lose! You chose ${humanChoice}! I chose ${computerChoice}!`;
    let tieMessage = `It's a tie! You chose ${humanChoice}! I chose ${computerChoice}!`;

    // find winner of the round
    switch(humanChoice) {
        case "rock":
            switch(computerChoice) {
                case "rock":
                    console.log(tieMessage);
                    break;
                case "paper":
                    console.log(loseMessage);
                    computerScore += 1;
                    break;
                case "scissors":
                    console.log(winMessage);
                    humanScore += 1;
                    break;
            }
            break;
        case "paper":
            switch(computerChoice) {
                case "rock":
                    console.log(winMessage);
                    humanScore += 1;
                    break;
                case "paper":
                    console.log(tieMessage);
                    break;
                case "scissors":
                    console.log(loseMessage);
                    computerScore += 1;
                    break;
            }
            break;
        case "scissors":
            switch(computerChoice) {
                case "rock":
                    console.log(loseMessage);
                    computerScore += 1;
                    break;
                case "paper":
                    console.log(winMessage);
                    humanScore += 1;
                    break;
                case "scissors":
                    console.log(tieMessage);
                    break;
            }
            break;
    }
}

function playGame() {
    
    let i = 0;
    
    while (humanScore != 3 && computerScore != 3 && humanScore + computerScore != 5) {
        
        // initiate round
        playRound(getHumanChoice(), getComputerChoice());
        
        // list scores
        console.log(`Total scores:\nYou: ${humanScore}\nMe: ${computerScore}`);
    };

    if (humanScore > computerScore) {
        prompt("You won!\n(press enter to continue)");
    }
    else if (computerScore > humanScore) {
        prompt("You lose!\n(press enter to continue)");
    }
    else {
        prompt("It's a tie!\n(press enter to continue)");
    }
}

// create event listeners
const btns = document.querySelectorAll("button");
btns.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.value, getComputerChoice())
    });
});