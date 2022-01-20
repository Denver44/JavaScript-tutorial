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

//  EXAMPLES 1

const details = {
  name: 'DENVER',
  age: '45',
};

const { name, age } = details;
const { name, age, gender } = details;
// as here gender property is not available so it will return undefined.

const companies = ['GOOGLE', 'TESLA', 'NIKOLA'];

const [c1, ...rest] = companies;
c1;
rest;

// MIXING OBJECTS AND ARRAYS

const Google = {
  locations: ['Mountain View', 'New York', 'london'],
};

const {
  locations: [location],
} = Google;

location;

// ARRAY TO OBJECTS DESTRUCTURING

const points = [
  [4, 5],
  [10, 1],
  [0, 40],
];

points.map(([x, y]) => {
  return { x, y };
});

const profile = {
  title: 'Engineer',
  department: 'Engineering',
};

//  EXAMPLE

function isEngineer({ title, department }) {
  return title === 'Engineer' && department === 'Engineering';
}

//  EXAMPLE

const classes = [
  ['Chemistry', '9AM', 'Mr. Darnick'],
  ['Physics', '10:15AM', 'Mrs. Lithun'],
  ['Math', '11:30AM', 'Mrs. Vitalis'],
];

const classesAsObject = classes.map(([x, y, z]) => {
  return [{ subject: x, time: y, teacher: z }];
});

//  EXAMPLE

const classes = [
  ['Chemistry', '9AM', 'Mr. Darnick'],
  ['Physics', '10:15AM', 'Mrs. Lithun'],
  ['Math', '11:30AM', 'Mrs. Vitalis'],
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
  return { subject, time, teacher };
});

// MORE EXAMPLES
let a, b;
[a, b] = [1, 2];
console.log(a);
console.log(b);
[a, b, c, ...d] = [11, 12, 13, 14, 15, 16];
console.log(a);
console.log(b);
console.log(c);

fruits = ['Apple', 'Banana', 'Mango'];
[a, b, c] = fruits;
console.log(a);
console.log(b);
console.log(c);
// Only imp the key name must be same as your variable nae
// we can re assign a new name by putting colon net to it and new name.

hp = {
  model: 'Hp-15',
  days: 23,
  ram: 4,
  tb: 1000,
  feature: {
    name: 'adonis',
  },
};

let { model: names, days, ram, tb, feature } = hp;

console.log(names, days, ram, tb, feature.name);
