// Exporting and Importing in ES6 Modules

//  Import is also Hoisted.

/*
// Importing module
import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
addToCart('bread', 5);
console.log(price, tq);

console.log('Importing module');
console.log(shippingCost);

*/

/*

// To Import Everything from a file

import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice);

*/

/*
// To import export default and export
import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
console.log(price);
*/

// The import is not done as values this below line of code proves, import are get connected.
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);
