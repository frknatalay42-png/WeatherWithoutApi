const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const feedback = document.getElementById("feedback");

const numberToGuess = Math.floor(Math.random() * 100) + 1;

guessBtn.addEventListener("click", () => {
  const guess = parseInt(guessInput.value);
  if (!guess || guess < 1 || guess > 100) {
    feedback.textContent = "Please enter a number between 1 and 100.";
    return;
  }

  if (guess === numberToGuess) {
    feedback.textContent = "🎉 Correct! You guessed the number!";
  } else if (guess < numberToGuess) {
    feedback.textContent = "Too low! Try again.";
  } else {
    feedback.textContent = "Too high! Try again.";
  }

  guessInput.value = "";
});
