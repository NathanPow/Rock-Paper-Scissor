/*
*Pseudocode
PLayed against a computer need a function for computor choice
need a method for a user to also select an inpu
We know that paper beats rock and rocks beat scissors but scissors beat paper 
need fucntion to consider each input and which one is the superior(Using If-Else or Switch Case staement)
need a function to display the winner 
need a fucntion to reset or it automatically resets on its own
Everything is being displayed in the Console dev 

# Declare all varibles at top(rock, paper and scissors can be const)
# Make all fucntions some containing conditional data structures 
# Make a function to collect the user's input 
# Make a fucntion to colect the computer's input
# Make a function to play a round, display winner and reset afterwards(Optional)
*/

let humanScore = 0;
let computerScore = 0;
let draw = 0;
let userInput;
let roundsPlayed = 0;
const rock = document.querySelector("#Rock");
const paper = document.querySelector("#Paper");
const scissors = document.querySelector("#Scissors");
const para = document.querySelector("#para");
const para2 = document.querySelector("#para2");
const para3 = document.querySelector("#para3");




function playGame(humanChoice){
    if(roundsPlayed >= 5){
        console.log("Game over! The Winner is: " + (humanScore > computerScore? "You!" : " the Computer!" ));
        return;
    }

        const computerChoice = getComputerChoice();
        para2.textContent ="Round " + (roundsPlayed + 1) + ": " +"The computer selected " + getComputerChoice() + " 🤖." ;
        para3.textContent ="You selected " + humanChoice + "." ;

        const result = playRound(computerChoice, humanChoice);
        console.log(result)
        roundsPlayed++;

         if (roundsPlayed === 5) {
        if (humanScore > computerScore) {
            console.log("🎉 YOU WIN THE GAME! 🎉");
        } else if (computerScore > humanScore) {
            console.log("💻 COMPUTER WINS THE GAME 💻");
        } else {
            console.log("🤝 IT'S A TIE GAME! 🤝");
        }
    }

    if(roundsPlayed < 5){
        para.textContent ="Loading Result..."
    }
    else if (roundsPlayed === 5) {
        if (humanScore > computerScore) {
            para.textContent = "🎉 YOU WIN THE GAME! 🎉 Human Score: " + humanScore + "|| " + " Computer Score: " + computerScore + "|| " + " Draws: " + draw;
        } else if (computerScore > humanScore) {
            para.textContent ="💻 COMPUTER WINS THE GAME! 💻 Human Score: " + humanScore + "|| " + " Computer Score: " + computerScore + "|| " + " Draws: " + draw;
        } else {
            para.textContent ="🤝 IT'S A TIE GAME! 🤝 Human Score: " + humanScore + "|| " + " Computer Score: " + computerScore + "|| " + " Draws: " + draw;
        }
    setTimeout(resetGame, 3000);
    }


}
rock.addEventListener("click" , function (){
    playGame("rock");
    

});

paper.addEventListener("click" , function (){
    playGame("paper");
    

});

scissors.addEventListener("click" , function (){
    playGame("scissors");

});


function resetGame() {
    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    draw = 0;
    console.log("New game started! Make your choice.");
    console.log("----------------------");
}

function getComputerChoice(){
    const randomNumber = Math.random() * 3 ;// Generates a random number between 1-3
        if(randomNumber < 1){
            return 'rock';
        }
        else if(randomNumber > 1 && randomNumber < 2){
            return 'paper';
        }
        else
            return 'scissors'       
}


function playRound(computerSelection, humanSelection){

    if(computerSelection === humanSelection){
        draw++;
        return("It's a tie")
    }
    else if(computerSelection === "rock" && humanSelection === "paper"){
        humanScore++;
        return("You Won! Paper beats Rock.");
    }
    else if(computerSelection === "paper" && humanSelection === "rock"){
        computerScore++;
        return("You lose! Paper beats Rock.");
    }
    else if(computerSelection === "paper" && humanSelection === "scissors"){
        humanScore++;
        return("You won! Scissors beats Paper.");
    }
    else if(computerSelection === "scissors" && humanSelection === "paper"){
        computerScore++;
        return("You lose! Scissors beats Paper.")
        
    }
    else if(computerSelection === "scissors" && humanSelection === "rock" ){
        humanScore++;
        return("You won! Rock beats Scissors.")
    }
    else if(computerSelection === "rock" && humanSelection === "scissors"){
        computerScore++;
        return("You lose! Rock beats Scissors");
    }
    else
        return undefined;
}





/*
//To save the user's scores
localStorage.setItem('humanScore', humanScore);
localStorage.setItem('computerScore', computerScore);

//To load the user's scores
humanScore = parseInt(localStorage.getItem('humanScore')) || 0;
computerScore = parseInt(localStorage.getItem('computerScore')) || 0;
*/


