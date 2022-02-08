'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// SPREAD, because on RIGHT OF =
const arr = [1, 2, ...[3, 4]];
console.log([1, 2, [3, 4]]);
console.log(arr);

// REST OPERATOR is actually opposite of spread operator and it will be LEFT side of =
// We used spread operator to built new array or to pass multiple values in function
// Rest use same syntax but it will pack different elements in one array same as we can see her ein below code.
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const addNumbers = (...numbers) => {
  const sum = numbers.reduce((sum, number) => sum + number, 0);
  console.log(typeof numbers, numbers, 'SUM = ', sum); // It will object
};

addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
addNumbers(...numbersArr);

const { sat, ...weekdays } = restaurant.openingHours;

console.log(sat, weekdays);
