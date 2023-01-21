// It helps us to write more secure Js code.
// To activate strict mode we have to just write  "use strict" at the top.
// It should be Very first statement  in Js file comment will be okay but other than will not be okay and strict mode will bot be activate then.
// We can also activate strict mode for specific function and scope, but that is not a good practice.
// Strict mode avoids accidentals bugs, it throw error when we use a variable name from future reserved keyword like interface.
// Declaring a variable without let var and const, It will throw error if we wrote "use strict" at the top.

'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can Drive 🚗');

sum(4, 5);
// Duplicate parameter name not allowed in this context
function sum(a, a) {
  c; // Uncaught ReferenceError: c is not defined
  console.log(a + b);
}

// first without using  use strict

// sum(5, 10);

// function sum(a, a) {
//   console.log((add = a + a));
// }

// This is valid until we don't use use strict
// here a will get 5 then second a will get 10 so due to name conflict now here add = 10 +10 so we get return 20

// ---------------------------------2 Now using use strict -------------------

// "use strict";
// sum(5, 10);

// function sum(a, b) {
//   let add = a + b;
//   console.log(add);
// }

// after using strict we cannot use same name as a parameter
// we cannot create e element without declaring it let or const or var.

// ---------------------------3 Arrow Function -------------------------------
// Now using fat arrow function in strict mode or not strict mode we cannot call an function without declaring it or defining it.

// "use strict";

let sum = (a, b) => {
  let add = a + b;
  console.log(add);
};
sum(5, 10);
