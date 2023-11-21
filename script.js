'use strict';
const checkGuessBtn = document.querySelector('.check');
const againResetBtn = document.querySelector('.again');
const guessMessage = document.querySelector('.message');
const userScoreMessage = document.querySelector('.score');
const backgroundColor = document.querySelector('body');
const unknownGuessNumber = document.querySelector('.number');
let randomGuessNumber = Math.floor(Math.random() * 20 + 1);
let userHighScoreMessage = document.querySelector('.highscore');
let score = 20;
let userHighScore = 0;

function displayMessage(parentContainer, message) {
  parentContainer.textContent = message;
}

function userGuessValue(userGuess) {
  if (userGuess === 0) {
    console.log('working');
    console.log(userGuess);
    // guessMessage.textContent = '⛔ no number please enter a number from 1 - 20';
    displayMessage(
      guessMessage,
      '⛔ no number please enter a number from 1 - 2'
    );
    return;
  }
  return userGuess;
}

function collectInput() {
  const userGuess = Number(document.querySelector('.guess').value);
  userGuessValue(userGuess);
  if (userGuess < randomGuessNumber && score > 0 && userGuess !== 0) {
    // guessMessage.textContent = 'guess too low 📉';
    displayMessage(
      guessMessage,
      userGuess > 0 ? 'guess too high 📈' : 'guess too low 📉'
    );
    score--;
    userScoreMessage.textContent = score;
  }
  if (userGuess === randomGuessNumber && score > 0) {
    console.log(score);
    guessMessage.textContent = 'correct 💥';
    unknownGuessNumber.textContent = randomGuessNumber;
    unknownGuessNumber.style.width = '30rem';
    backgroundColor.style.backgroundColor = '#60b347';
    userScoreMessage.textContent = score;
    console.log(userHighScore);
    userHighScore += score;
    userHighScoreMessage.textContent = userHighScore;
  }
  if (userGuess > randomGuessNumber && score > 0 && userGuess !== 0) {
    // guessMessage.textContent = 'guess too high 📈';
    displayMessage(
      guessMessage,
      userGuess > 0 ? 'guess too high 📈' : 'guess too low 📉'
    );
    score--;
    userScoreMessage.textContent = score;
  }
  if (score === 0) {
    // guessMessage.textContent = 'you loose 👎';
    displayMessage(guessMessage, 'you loose 👎');
  }
}
checkGuessBtn.addEventListener('click', collectInput);

function resetGame() {
  score = 20;
  userScoreMessage.textContent = score;
  randomGuessNumber = Math.floor(Math.random() * 20 + 1);
  backgroundColor.style.backgroundColor = '#222222';
  unknownGuessNumber.style.width = '15rem';
  document.querySelector('.guess').value = '';
  unknownGuessNumber.textContent = '?';
  displayMessage(guessMessage, 'start guessing ...');
}
// Resetting the Game
againResetBtn.addEventListener('click', resetGame);
