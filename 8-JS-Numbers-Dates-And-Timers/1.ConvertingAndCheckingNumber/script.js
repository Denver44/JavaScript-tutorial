'use strict';

// Converting and Checking Numbers
console.log(23 === 23.0);

// Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.3333333
// Binary base 2 - 0 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// Conversion
console.log(Number('23'));
console.log(+'23'); // Here Js will do type coercion and convert string number to Number.

// Parsing
// As Number is also object and so we have some methods with it.

console.log(Number.parseInt('30px'));

// parseInt function accepts 2nd arguments is base of Number
console.log(Number.parseInt('30px', 10)); // 1 to 9 number representation.
console.log(Number.parseInt('30px', 2)); // binary representation

console.log(Number.parseInt('e23'));
console.log(Number.parseInt('e23', 10));

console.log(Number.parseInt('  2.5rem  '));
console.log(Number.parseFloat('  2.5rem  '));

// As parseFloat and parseInt is global function so this will work
// But this method is not encourage.
console.log(parseFloat('  2.5rem  '));

// Check if value is NaN (is Not a Number)
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0)); // Infinity is also NAN.

// Checking if value is number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));
