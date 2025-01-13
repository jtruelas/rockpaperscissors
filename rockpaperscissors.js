let humanScore = 0;
let computerScore = 0;

// create elements
const playerScoreContainer = document.getElementById("player-score");
const compScoreContainer = document.getElementById("computer-score");

function getComputerChoice() {

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

    // create elements
    const container = document.getElementById("result-message");

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
    let winMessage = `You win!\nYou chose ${humanChoice}!\nI chose ${computerChoice}!`;
    let loseMessage = `You lose!\nYou chose ${humanChoice}!\nI chose ${computerChoice}!`;
    let tieMessage = `It's a tie!\nYou chose ${humanChoice}!\nI chose ${computerChoice}!`;

    // find winner of the round
    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    container.textContent = tieMessage;
                    break;
                case "paper":
                    container.textContent = loseMessage;
                    computerScore += 1;
                    compScoreContainer.textContent = computerScore;
                    break;
                case "scissors":
                    container.textContent = winMessage;
                    humanScore += 1;
                    playerScoreContainer.textContent = humanScore;
                    break;
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "rock":
                    container.textContent = winMessage;
                    humanScore += 1;
                    playerScoreContainer.textContent = humanScore;
                    break;
                case "paper":
                    container.textContent = tieMessage;
                    break;
                case "scissors":
                    container.textContent = loseMessage;
                    computerScore += 1;
                    compScoreContainer.textContent = computerScore;
                    break;
            }
            break;
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    container.textContent = loseMessage;
                    computerScore += 1;
                    compScoreContainer.textContent = computerScore;
                    break;
                case "paper":
                    container.textContent = winMessage;
                    humanScore += 1;
                    playerScoreContainer.textContent = humanScore;
                    break;
                case "scissors":
                    container.textContent = tieMessage;
                    break;
            }
            break;
    }

    if(humanScore == 5) {
        setTimeout(() => {
        alert("YOU WIN!");
        window.location.reload();
        }, 100);
    }
    if(computerScore == 5) {
        setTimeout(() => {
        alert("I WIN!");
        window.location.reload();
        }, 100);
    }
}
/* Legacy function prior ui
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
*/

// create event listeners
const btns = document.querySelectorAll("button");
btns.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.value, getComputerChoice())
    });
});