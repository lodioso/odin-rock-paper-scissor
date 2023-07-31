function getComputerChoice() {
    const weapon = Math.floor(Math.random() * 3);
    if (weapon == 0) {
        return "rock";
    }
    if (weapon == 1) {
        return "paper";
    } else {
        return "scissor";
    }
}


function round(playerSelection, computerSelection) {

    // Win
    if (playerSelection == "rock" && computerSelection == "scissor") {
        return "You win! Rock beats Scissor";
    }

    if (playerSelection == "scissor" && computerSelection == "paper") {
        return "You win! Scissor beats paper";
    }

    if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! Paper beats rock";
    }
    // A tie

    if (playerSelection == computerSelection) {
        return "It's a tie!";
    }

    // Lose
    if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose! Paper beats rock";
    }

    if (playerSelection == "scissor" && computerSelection == "rock") {
        return "You lose! Rock beats scissor";
    }

    if (playerSelection == "paper" && computerSelection == "scissor") {
        return "You lose! Scissor beats paper";
    }

}

let playerSelection = "rOcK";
playerSelection = playerSelection.toLowerCase();
const computerSelection = getComputerChoice();
console.log(round(playerSelection, computerSelection));