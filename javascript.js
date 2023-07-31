function getComputerChoice() {
    const weapon = Math.floor(Math.random() * 3);
    if (weapon == 0) {
        return "Rock";
    } else if (weapon == 1) {
        return "Paper";
    } else {
        return "Scissor";
    }
}

console.log(getComputerChoice())