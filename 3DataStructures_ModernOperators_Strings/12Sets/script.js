'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Sets
// NOTE :- We can use set only on iterable objects
// Set is used to get a unique elements from an array or or string
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log('SET ', ordersSet);

// For string it will create a unique characters
console.log(new Set('Jonas'));

console.log(ordersSet.size); // Size property return size of elements in set

console.log(ordersSet.has('Pizza')); // To check whether this element is present in set or not.
console.log(ordersSet.has('Bread'));

ordersSet.add('Garlic Bread'); // Add method is used to insert element in set
ordersSet.add('Garlic Bread');

ordersSet.delete('Risotto'); // delete is used to delete an element for a set.
ordersSet.clear(); // Clear function will clear all the element from the set.

console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
// We can create an array from set
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('denver').size);

const props = Object.keys(openingHours);
console.log(new Set(props));
console.log(new Set(props).add('MON'));

// Use set only if u need and array of unique elements or strings but not for iterating element because we cannot pop element one by one in set like we did in array
