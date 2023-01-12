const choices = ["rock", "paper", "scissors"]
function getComputerChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
}

function playerSelection() {
    let playerInput = prompt("Please select Rock, Paper, or Scissors")
    let playerInputResult = playerInput.toLowerCase
    return playerInputResult;
}
