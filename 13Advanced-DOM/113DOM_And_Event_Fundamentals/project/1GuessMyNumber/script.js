'use strict';

let score = 20;
let highScore = 0;
let getInputNumber = null;
const generateRandomNumber = () => Math.trunc(Math.random() * 20) + 1;

let guessNumber = generateRandomNumber();

const btn = document.querySelector('.check');
const playAgainBtn = document.querySelector('.again');
const scoreText = document.querySelector('.score');
const highScoreText = document.querySelector('.highscore');
const message = document.querySelector('.message');
const guessInput = document.querySelector('.guess');
const realNumber = document.querySelector('.number');
const body = document.querySelector('body'); // As we have to select element body so no (.,#)

scoreText.textContent = score;
highScoreText.textContent = highScore;

const setGameBackGround = (color, width) => {
  realNumber.style.width = width;
  body.style.backgroundColor = color;
};

const setScoreAndMsg = (msg, value) => {
  message.textContent = msg;
  score = value;
  scoreText.textContent = score;
};

const resetGame = () => {
  score = 20;
  scoreText.textContent = score;
  message.textContent = 'Start guessing...';
  guessInput.value = '';
  guessNumber = generateRandomNumber();
  realNumber.textContent = '?';
  setGameBackGround('#222', '15rem');
};

const checkGuessIsRight = (value) => {
  if (!value) {
    message.textContent = '🛑 Please enter a number';
  } else if (value === guessNumber) {
    message.textContent = '🎇 You won';
    realNumber.textContent = guessNumber;
    setGameBackGround('#60b347', '30rem');
    if (score > highScore) {
      highScore = score;
      highScoreText.textContent = highScore;
    }
  } else if (value !== guessNumber && score > 1) {
    value > guessNumber
      ? setScoreAndMsg('😔 Too high', --score)
      : setScoreAndMsg('😔 Too Low', --score);
  } else {
    setScoreAndMsg('💥 You lost', 0);
  }
};

btn.addEventListener('click', () => {
  getInputNumber = Number(guessInput.value);
  checkGuessIsRight(getInputNumber);
});

playAgainBtn.addEventListener('click', resetGame);
