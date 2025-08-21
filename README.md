# Rock-Paper-Scissor

Rock, paper, scissors (also known as Rochambeau, Roshambo, or Janken) is a fun and easy hand game that anyone can learn and enjoy. It’s a great way to make minor decisions when you and a friend can’t agree on something, or even just an entertaining way to pass the time.

## How It Works (The Code)

This implementation is a console-based game played for 5 rounds. The logic is handled by three main functions in JavaScript:

1.  **`getComputerChoice()`**: Generates the computer's random play.
    *   Uses `Math.random()` to pick a number between 0-3.
    *   Uses `if/else` statements to return 'rock', 'paper', or 'scissors' based on that number.

2.  **`getHumanChoice()`**: Gets and validates the player's input.
    *   Uses `prompt()` to ask for your choice.
    *   Converts your answer to lowercase to accept any capitalization (e.g., "Rock" or "ROCK").
    *   Checks if the input is valid ('rock', 'paper', 'scissors') or if the user cancelled the game.

3.  **`playRound()`**: Plays a single round and decides the winner.
    *   Takes the computer's and human's choices as parameters.
    *   Uses a series of `if/else if` statements to compare the choices against the game's rules.
    *   Updates the global `humanScore` and `computerScore` variables and returns a string with the result (e.g., "You lose! Paper beats Rock").

The `playGame()` function wraps everything together, running a 5-round loop, calling the other functions, and announcing the final winner.