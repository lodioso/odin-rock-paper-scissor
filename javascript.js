let playerScore = 0;
let computerScore = 0;
let rounds = 0;

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
    playerSelection = prompt("Rock, paper or scissor?");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();
    console.log("Computer chose: " + computerSelection);
    // Win
    if (playerSelection == "rock" && computerSelection == "scissor") {
        playerScore++
        console.log("You win! Rock beats Scissor");
    }

    if (playerSelection == "scissor" && computerSelection == "paper") {
        playerScore++
        console.log("You win! Scissor beats paper");

    }

    if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++
        console.log("You win! Paper beats rock");
    }
    // A tie

    if (playerSelection == computerSelection) {
        console.log("It's a tie!");
    }

    // Lose
    if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++
        console.log("You lose! Paper beats rock");
    }

    if (playerSelection == "scissor" && computerSelection == "rock") {
        computerScore++
        console.log("You lose! Rock beats scissor");
    }

    if (playerSelection == "paper" && computerSelection == "scissor") {
        computerScore++
        console.log("You lose! Scissor beats paper");
    }

}



function game() {
    do {
        round();
        rounds++;
        console.log("Round: ", rounds)
    }
    while (rounds < 5)

    if (computerScore > playerScore) {
        return "You lose the game! Computer won"
    } else {
        return "You win the game! Computer lose"
    }
}

console.log(game())