'use strict';

// Timers

// setTimeout Will be Executed Once

// setTimeout(
//   (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
//   3000,
//   'olives',
//   'spinach'
// );

const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  3000,
  ...ingredients
);
console.log('Waiting...');

// To cancel a time we use clearTimeout and pass the timerId which we want to clear.
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval it will be executed after certain Interval.
setInterval(function () {
  const now = new Date();
  console.clear();
  console.log(now);
}, 1000);
