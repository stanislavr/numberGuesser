/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

// UI Elements
const UIgame = document.querySelector("#game"),
  UIminNum = document.querySelector(".min-num"),
  UImaxNum = document.querySelector(".max-num"),
  UIguessBtn = document.querySelector("#guess-btn"),
  UIguessInput = document.querySelector("#guess-input"),
  UImsg = document.querySelector(".message");

// Assign UI min and max numbers
UIminNum.textContent = min;
UImaxNum.textContent = max;
/*
// Listen for a guess
UIguessBtn.addEventListener("click", function() {
  let guess = parseInt(UIguessInput.value);
  console.log(guess);
  if(guess === NaN || guess < min || guess > max)
});
*/
