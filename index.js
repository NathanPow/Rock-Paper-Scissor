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

function getHumanChoice(){
    let userInput = prompt("Enter Rock, Paper or Scissors: ", )
        if (userInput === null ){
            return "Game was cancelled by user."
        }

        userInput = userInput.toLowerCase(); // converts string to lowercase

        if(userInput === "rock"){
            return 'rock';
        }
        else if(userInput === "paper"){
            return 'paper';
        }
        else if (userInput === 'scissors'){
            return 'scissors';
        }
        else{
         return "Not a valid input! Please enter Rock, Paper or Scissors"
        }        
}

function playRound(computerSelection, humanSelection){

    if(computerSelection === humanSelection){
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

function playGame(){

    for(let i = 0; i < 5; i++){
    let currentComputerChoice = getComputerChoice();
    let currentHumanChoice = getHumanChoice();
    let round = i + 1;
    console.log("round"+ round + ": " +"The computer's chose "  + currentComputerChoice);
    console.log("round"+ round + ": " +"You selected " + currentHumanChoice)
    playRound(currentComputerChoice, currentHumanChoice);
     if(currentHumanChoice === null){
        i--;
        return "Invalid input"
     }
    }
    if(computerScore > humanScore){
        return("\nSorry you lost, The Computer won with " + computerScore + " points.")
    }
    else if(humanScore > computerScore){
        return("\nYay you won! You have an overall of " + humanScore + " points.")
    }
    else if(computerScore  === humanScore){
        return("\nIt's a tie")
    }
}


console.log(playGame())

/*
//To save the user's scores
localStorage.setItem('humanScore', humanScore);
localStorage.setItem('computerScore', computerScore);

//To load the user's scores
humanScore = parseInt(localStorage.getItem('humanScore')) || 0;
computerScore = parseInt(localStorage.getItem('computerScore')) || 0;
*/