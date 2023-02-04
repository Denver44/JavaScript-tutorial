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

const companies = ['GOOGLE', 'TESLA', 'APPLE'];
const [x, y, z] = companies; // This is call destructuring of array, original array is never affected.
console.log(x, y, z);

let [first, second] = restaurant.categories;
console.log(first, second);

// Swapping two variables
[first, second] = [second, first];
console.log(first, second);

// if we have to skip second and pick the third element just leave a space
[first, , second] = restaurant.categories;
console.log(first, second);

const [starter, main] = restaurant.orderFood(1, 2);
console.log(starter, main);

const nested = [2, 4, [5, 6]];

// Nested Array destructuring
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Setting default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// to take rest of element in one variable use (...variableName)
const [c1, ...rest] = companies;
console.log(c1, rest);

const classes = [
  ['Chemistry', '9AM', 'Mr. Darnick'],
  ['Physics', '10:15AM', 'Mrs. Lithun'],
  ['Math', '11:30AM', 'Mrs. Vitalis'],
];

const classesAsObject = classes.map(([x, y, z]) => {
  return [{ subject: x, time: y, teacher: z }];
});
