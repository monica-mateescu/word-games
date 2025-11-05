console.log("Welcome to Rock Paper Scissors Game!");

const options = ["rock", "paper", "scissors"];

// Read user's move from the command line
const arg = process.argv[2];

// Check if the user entered an argument
if (!arg) {
  console.log("Type rock, paper or scissors to play.");
  process.exit(2);
}

const userMove = arg.trim().toLowerCase();

// Validate that the user's move is one of the allowed options
if (options.indexOf(userMove) === -1) {
  console.log("Invalid move! Please type rock, paper or scissors.");
  process.exit(2);
}
console.log("You chose:", userMove);

// Computer randomly generate a move
const computerMove = options[Math.floor(Math.random() * options.length)];
console.log("Computer chose:", computerMove);

// Check for draw
if (userMove === computerMove) {
  console.log("It's a draw. Try again :)");
  process.exit(0);
}

// Determine the winner
if (
  (userMove === "rock" && computerMove === "scissors") ||
  (userMove === "scissors" && computerMove === "paper") ||
  (userMove === "paper" && computerMove === "rock")
) {
  console.log("You win!");
} else {
  console.log("You lose.");
}

process.exit(0);
