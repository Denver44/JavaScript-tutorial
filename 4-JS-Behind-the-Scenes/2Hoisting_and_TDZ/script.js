'use strict';

///////////////////////////////////////
// Hoisting and TDZ in Practice

// Hoisting with Variables
// me is var type variable and var is hoisted so it will give undefined.
console.log(me);

// These two are in temporal dead Zone from here till they are not defined
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Hoisting with  Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

// Only this will work
function addDecl(a, b) {
  return a + b;
}

// Both expression and arrow function will throw error if we try to access them before there initialization as we know due hoisting for var type variable it will be undefined and for let and const type function it will be initialization error.
const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1; // This will create a global x variable in window object
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
