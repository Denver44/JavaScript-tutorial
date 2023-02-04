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
  orderFood: function (starterIdx, mainIdx) {
    return [this.starterMenu[starterIdx], this.mainMenu[mainIdx]];
  },
  orderFoodDelivery: function ({
    starterIdx = 0,
    mainIdx = 0,
    time = '23:00',
    address: addr,
  }) {
    console.log(
      `Your starter ${this.starterMenu[starterIdx]} and main ${this.mainMenu[mainIdx]} food is delivered to ${addr} at ${time}`
    );
  },

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

restaurant.orderFoodDelivery({
  time: '22:30',
  address: 'Via del sole, 21',
  mainIdx: 2,
  starterIdx: 2,
});
restaurant.orderFoodDelivery({
  address: 'Via del sole, 21',
});

//  EXAMPLES 1

let details = {
  name: 'DENVER',
  age: '45',
};

let { name, age } = details;
let { name_, age_, gender } = details; // as here gender property is not available so it will return undefined.

// MIXING OBJECTS AND ARRAYS

let Google = {
  location: ['Mountain View', 'New York', 'london'],
};

let {
  location: [locations],
} = Google;

console.log(locations);

// ARRAY TO OBJECTS DESTRUCTURING

const points = [
  [4, 5],
  [10, 1],
  [0, 40],
];

const pointsObj = points.map(([x, y]) => {
  return { x, y };
});

console.log(pointsObj);

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
console.log(classesAsObject);

// Only imp the key name must be same as your variable nae
// we can re assign a new name by putting colon net to it and new name.
