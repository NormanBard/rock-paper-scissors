const choices = ["rock", "paper", "scissors"]
const winners = [];

function game() {
    for (let i = 0; i <= 5; i++) {
        playRound();
    }
    logWins(); ``
}


function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection)
    winners.push(winner);

}

function playerChoice() {
    let input = prompt("Choose rock, paper, or scissors.").toLowerCase();
    input = input.toLowerCase();
    console.log(input)
    return input;
}

function computerChoice() {
    // get random input from player 

    return choices[Math.floor(Math.random() * choices.length)]
}

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
        return "It's a tie"
    }
    else if (
        (choiceP === "paper" && choiceC === "rock") || (choiceP === "rock" && choiceC === "scissors") || (choiceP === "scissors" && choiceC === "paper")) {
        return "You Win!"
    }
    else {
        return "Computer Wins!"
    }

}



function logWins() {
    let playerWins = winners.filt
}

game();

