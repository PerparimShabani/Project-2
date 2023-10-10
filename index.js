// Get references to HTML elements
const [playerScript, computerScript, resultScript] = [
  "playerScript",
  "computerScript",
  "resultScript",
].map((id) => document.getElementById(id));

const choiceBtns = document.getElementsByClassName("choiceBtn");

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
// Click event added for choice buttons
Array.from(choiceBtns).forEach((button) =>
  button.addEventListener("click", () => {
    // Get's the players choice from the cliced button
    player = button.querySelector(".choiceText").textContent.toUpperCase();
    // Determines the computers choice
    computerTurn();
    // Update the game display with player and computer choices and result
    playerScript.textContent = `Player: ${player}`;
    computerScript.textContent = `Computer: ${computer}`;

    result = checkWinner();
    if (result === "You Win!") {
      playerScore++;
    } else if (result === "You Lose!") {
      computerScore++;
    }

    roundsPlayed++;
    // Displays the current round and score
    resultScript.textContent = `${result}(Player: ${playerScore} / Computer: ${computerScore})`;

    // Checks if the game is finished
    if (roundsPlayed === 5) {
      // Determine the winner and resets the game
      if (playerScore > computerScore) {
        resultScript.textContent = "You win the game!";
      } else if (playerScore < computerScore) {
        resultScript.textContent = "Computer wins the game!";
      } else {
        resultScript.textContent = "It's a tie!";
      }

      // Reset the scores and round played for a new game
      playerScore = 0;
      computerScore = 0;
      roundsPlayed = 0;
    }
  })
);

function computerTurn() {
  // The options that the computer can pick
  const options = ["CHARMANDER", "SQUIRTLE", "BULBASAUR"];
  // Generates a random number for the computer to select a choice
  const randNum = Math.floor(Math.random() * options.length);
  computer = options[randNum];
}

function checkWinner() {
  // Log player and computer choices
  console.log("Player:", player);
  console.log("Computer:", computer);

  // Determine the winner and log's the result
  if (player === computer) {
    console.log("Result: Draw!");
    return "Draw!";
  } else if (
    (player === "CHARMANDER" && computer === "BULBASAUR") ||
    (player === "SQUIRTLE" && computer === "CHARMANDER") ||
    (player === "BULBASAUR" && computer === "SQUIRTLE")
  ) {
    console.log("Result: You Win!");
    return "You Win!";
  } else {
    console.log("Result: You Lose!");
    return "You Lose!";
  }
}
