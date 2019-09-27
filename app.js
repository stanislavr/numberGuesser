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
  winningNum = getRandomNum(min, max),
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

// Play again event listener
UIgame.addEventListener("mousedown", function(e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

// Listen for a guess
UIguessBtn.addEventListener("click", function() {
  let guess = parseInt(UIguessInput.value);
  console.log(guess);
  // validate input
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }

  // check if won
  if (guess === winningNum) {
    // game won!
    // disable input
    UIguessInput.disabled = true;
    gameResult(true, `You won! ${winningNum} is the secret number :)`, "green");
    // Play Again
    setPlayAgainBtn();
  } else {
    // Wrong guess
    guessesLeft--;
    if (guessesLeft === 0) {
      // game over - lost
      // disable input
      UIguessInput.disabled = true;
      gameResult(false, `You lost! ${winningNum} was the secret number`);
      // Play Again
      setPlayAgainBtn();
    } else {
      // game continues - wrong guess
      gameResult(
        false,
        `${guess} is not correct, ${guessesLeft} guesses left!`,
        "red"
      );
      // clear Input
      UIguessInput.value = "";
    }
  }
});

// Provide game result
function gameResult(victory, msg) {
  let color;
  // select color
  victory ? (color = "green") : (color = "red");
  // set border color
  UIguessInput.style.borderColor = color;
  // set msg
  setMessage(msg, color);
}

// Show Message
function setMessage(msg, color) {
  UImsg.style.color = color;
  UImsg.textContent = msg;
}

// Set Btn to Play Again
function setPlayAgainBtn() {
  UIguessBtn.value = "Play Again?";
  UIguessBtn.className += "play-again";
}

// get a random winning number
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
