let playerWins = [] //Create section for global scope
let compWins = []
let playerScore = 0
let computerScore = 0
let tieScore = 0
let tournamentTest = tournamentWin();
console.log(computerScore);
console.log(playerScore);
console.log(tieScore)
console.log(tournamentWin());
const choices = ["rock", "paper", "scissors"]

function getComputerChoice() { //Get random choice from computer
   return choices[Math.floor(Math.random() * choices.length)];
   }

let resultsDiv = document.createElement('div'); // Create the div results box
document.body.appendChild(resultsDiv);

resultsDiv.style.border = "1px solid black";
resultsDiv.style.width = "200px";
resultsDiv.style.height = "100px";

let scoreboardDiv = document.createElement('div'); //Create the player wins display
document.body.appendChild(scoreboardDiv);
scoreboardDiv.style.border = "2px solid black"
scoreboardDiv.style.width = "200px";
scoreboardDiv.style.height = "100px";

let scoreboardDiv2 = document.createElement('div'); //Create the computer wins display
document.body.appendChild(scoreboardDiv2);
scoreboardDiv2.style.border = "2px solid black"
scoreboardDiv2.style.width = "200px";
scoreboardDiv2.style.height = "100px";


btn1.addEventListener('click', () => { //Results based on rock selection
   let computerSelection = getComputerChoice();
   if (computerSelection === "rock") {
      resultsDiv.textContent = ("It's a tie!")
      tieScore++
   } else if (computerSelection === "paper") {
      resultsDiv.textContent = ("You lose")
      computerScore++
      
   } else {
      resultsDiv.textContent = ("You win!")
      playerScore++
      
   }
   console.log(computerScore);
   console.log(playerScore);
   console.log(tieScore);
   console.log(tournamentWin());
   scoreboardDiv.textContent = `Player Score: ${playerScore}`;
   scoreboardDiv2.textContent = `Computer Score: ${computerScore}`;

});

btn2.addEventListener('click', () => { //Resutlts based on paper selection
   let computerSelection = getComputerChoice();
   if (computerSelection === "paper") {
      resultsDiv.textContent = ("It's a tie!")
      tieScore++
   } else if (computerSelection === "scissors") {
      resultsDiv.textContent = ("You lose")
      computerScore++
   } else {
      resultsDiv.textContent = ("You win!")
      playerScore++
   }
   console.log(computerScore);
   console.log(playerScore);
   console.log(tieScore);
   console.log(tournamentWin());
   scoreboardDiv.textContent = `Player Score: ${playerScore}`;
   scoreboardDiv2.textContent = `Computer Score: ${computerScore}`;

});

btn3.addEventListener('click', () => { //results based on scissor selection
   let computerSelection = getComputerChoice();
   if (computerSelection === "scissors") {
      resultsDiv.textContent = ("It's a tie!")
      tieScore++
   } else if (computerSelection === "rock") {
      resultsDiv.textContent = ("You lose")
      computerScore++
   } else {
      resultsDiv.textContent = ("You win!")
      playerScore++
   }
   console.log(computerScore);
   console.log(playerScore);
   console.log(tieScore);
   console.log(tournamentWin());
   scoreboardDiv.textContent = `Player Score: ${playerScore}`;
   scoreboardDiv2.textContent = `Computer Score: ${computerScore}`;

});

function tournamentWin(){ //Declare first to 5 wins; tournmanet winner
   if (playerScore === 5) {
      alert("You win the battle! You are a mighty warrior!")
      window.location.reload();
   } else if (computerScore === 5) {
      alert("Computer wins the battle, but you may battle again!")
      window.location.reload();
   } else {
      console.log("The battle is being weiged!")
      
   }
   }
scoreboardDiv.textContent = `Player Score: ${playerScore}`; //Relay results to score displays
scoreboardDiv2.textContent = `Computer Score: ${computerScore}`;
