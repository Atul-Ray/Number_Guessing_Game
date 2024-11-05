let inputNum = document.getElementById("inputNum");
let suggestion = document.getElementById("suggestion");

let attempt = 0;
let randomNumber = Math.floor(Math.random() * 100 + 1);

function guessTheNumber() {
  attempt++;
  let guess = inputNum.value;
  if (isNaN(guess) || guess < 1 || guess > 100) {
    suggestion.innerHTML = "Please enter a valid number between 1 and 100.";
  } else if (guess > randomNumber) {
    suggestion.innerHTML = "Try Lower!";
  } else if (guess < randomNumber) {
    suggestion.innerHTML = "Try Higher!";
  } else {
    suggestion.innerHTML = `Congratulations! You guessed the number in ${attempt} attempts.`;
  }
}

function GameReset() {
  suggestion.innerHTML = "";
  inputNum.value = "";
  attempt = 0;
  randomNumber = Math.floor(Math.random() * 100 + 1);
}
