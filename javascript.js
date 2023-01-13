let playerWins = []
let compWins = []

function game() {
   const choices = ["rock", "paper", "scissors"]
   function getComputerChoice() {
      return choices[Math.floor(Math.random() * choices.length)];
   }

   function getPlayerChoice() {
      let input = prompt("Pick rock, paper, or scissors.")
      let input2 = input.toLowerCase();
      if (input2 === "rock" || input2 === "paper" || input2 === "scissors") {
         return input2
      } else {
         console.log("Error please try again!");
      }
   }

   let playerSelection = getPlayerChoice();
   let computerSelection = getComputerChoice();

   function playRound(playerSelection, computerSelection) {
      if
         (playerSelection === computerSelection) { return ("it's a tie!") }
      else if
         (playerSelection === "rock" && computerSelection === "scissors" ||
         playerSelection === "scissors" && computerSelection === "paper" ||
         playerSelection === "paper" && computerSelection === "rock") {
         playerWins++
         return ("You Win!")
      }
      else {
         compWins++
         return ("You Lose!")
      }
   }

   //console.log("You chose" + " " + playerSelection + "!")
   //console.log("Computer chose" + " " + computerSelection + "!")
   console.log(playRound(playerSelection, computerSelection));
}

for (let i = 1; i < 5; i++) {
   game();
}

console.log(game());

function gameEnd() {
   if (playerWins >= 3) {
      return ("You win the tournament!")
   }
   else (compWins >= 3)
   return ("You lose the tournament")

}

console.log(gameEnd());