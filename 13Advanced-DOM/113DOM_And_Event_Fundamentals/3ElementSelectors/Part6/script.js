'use strict';

// STEPS
// Here we have input field here we will enter the input
// then we have to check that the input which we entered is high o low
// If enter input is same our random number between 1 & 2 then you won:-
//  Condition after winning :-
// 1) Check if your score is greater than high score update high score by that score, else keep your high score was it was.

// If person click on again generate a new random number and game start score again reset to 20.

const guessNumber = Math.ceil(Math.random() * 21);

let getInputNumber = null;

// Check Button
const btn = document.querySelector('.check');

// Event Listener for check Button
// A Event Listener take two things first is type of event we want to listen like click, hover or tc. and then in second argument it take a event handler function
// Function is just a value

// Note :- We have to  just define the function in event Listener we don't have to call it the javascript engine which will called the function as soon as the click event occur.

btn.addEventListener('click', () => {
  getInputNumber = Number(document.querySelector('.guess').value);
});

document.querySelector('.message').textContent = 'Happy 💥';
document.querySelector('.message').innerHTML = 'Happy2 💥';

// We use .value for access and mutating the value for input field.

// As we have to select element body so no (.,#)
const body = document.querySelector('body');
// we use style property as we have to styling and it will be inline style what ever we do
// To change any css property it should be in camelCase.
body.style.backgroundColor = '';
