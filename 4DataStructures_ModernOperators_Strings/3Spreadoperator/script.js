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

const color1 = ['RED', 'GREEN'];
const color2 = ['ORANGE', 'BLUE'];

// Join 2 or more arrays
const newArr = [...color1, ...color2];
const newArr2 = ['YELLOW', ...color1, ...color2];

// Iterables : arrays, strings, maps , sets , NOT objects

const str = 'Denver';
console.log('D', 'e', 'n', 'v', 'e', 'r');
console.log(...str); // Both area same.
console.log(...str, ' ', 'Heist'); // Both area same.

// Shallow and Deep Copy concept od spread operators

let hp = {
  model: 'Hp-15',
  days: 23,
  ram: 4,
  tb: 1000,
  feature: {
    name: 'adonis',
  },
};

// Here it will do Deep copy not shallow copy this we can see other wise both the value got affected.
const myLaptop = { ...hp };
console.log(myLaptop);
myLaptop.ram = 8;
console.log(myLaptop);
console.log(hp);

const MathLibrary = {
  calculateProduct(a, b) {
    return a * b;
  },
  multiply(a, b) {
    return a * b;
  },
};

const newMathLibrary = {
  calculateProduct(...rest) {
    console.log('THIS IS DEPRECATED FUNCTION NOW USE multiply Function');
    return this.multiply(...rest);
  },
  multiply(a, b) {
    console.log('This your New functions');
    return a * b;
  },
};

console.log(MathLibrary.calculateProduct(5, 6));
console.log(newMathLibrary.calculateProduct(5, 6));
