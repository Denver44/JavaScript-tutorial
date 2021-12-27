console.log("we are on tut 23");

let x = 8;
let y = 8;
let z = x + y;
z = x - y;
z = x / y;
z = x * y;

// Exploring the Math Object
z = Math; // whole math function we will get.
z = Math.PI;
z = Math.E;
z = Math.SQRT2;
z = Math.round(3.49); // value above or equal to 0.50 will get the top value
z = Math.ceil(3.99); // always get the top value
z = Math.floor(3.99); // always get the floor value
z = Math.abs(-7);
z = Math.sqrt(5);
z = Math.pow(5, 2);
z = Math.min(5, 2, 1, 45, 66, 7);
z = Math.max(5, 2, 677, 432, 56);
z = 50 + (100 - 50) * Math.random(); // it will genearte value under 0 so u have to add or multiply according to your need

console.log(z);

let number = -0;
number = 1;
number = -1;
console.log(Math.sign(number));

// trunc nly remove the number after decimals.
console.log(Math.trunc(5.666));
console.log(Math.trunc(-5.666));
console.log(3 ** 4); // power opeator in js.

// ------ NaN <------------ Not a Number

let num = 5;

console.log(Number.isFinite(num));
console.log(Number.isFinite(555555555555555555555555555555555));
let num2 = Infinity;
console.log(Number.isFinite(num2));
let num3 = NaN;
console.log(Number.isFinite(num3));
console.log(isNaN(num3));
num3 = "denver";
console.log(Number.isNaN(num3));

let num4 = "denver";
console.log(Number.isFinite(num3));
console.log(isFinite(num3));
console.log(Number.isInteger(1));
console.log(Number.isInteger(-1));
console.log(Number.isInteger(-1.5));
