'use strict';

// Selecting elements

// Score of the players
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); // It will be past then querySelector

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// Select the Dice Image
const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0; // IT hold who is playing current
  playing = true;

  // Making there Score initialize to Zero.
  score0El.textContent = 0;
  score1El.textContent = 0;

  current0El.textContent = 0;
  current1El.textContent = 0;

  // At start when game start we don't want to appear the dice image.
  diceEl.classList.add('hidden');

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;

  // Use toggle
  // if (activePlayer === 0) {
  //   player0El.classList.remove('player--active');
  //   player1El.classList.add('player--active');
  // } else {
  //   player1El.classList.remove('player--active');
  //   player0El.classList.add('player--active');
  // }

  activePlayer = activePlayer === 0 ? 1 : 0;

  // Toggle method will add if not there if it is there it will add
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
const rollingDiceFunction = () => {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1; // This will give number from 0 to 5 we add 1 to elevate

    // 2. Display dice
    diceEl.classList.remove('hidden'); // We have to remove the class we use ClassList
    diceEl.src = `img/dice-${dice}.png`; // We have to src attribute we have used src.

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
};

// Rolling Dice Listener
btnRoll.addEventListener('click', rollingDiceFunction);

const holdScore = () => {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;

    // Updating its current score on html
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game as we have won the game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
};
btnHold.addEventListener('click', holdScore);

btnNew.addEventListener('click', init);
