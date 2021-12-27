// It helps us to write more secure Js code.
// To activate strict mode we have to just write  "use strict" at the top.
// It should be Very first statement  in Js file comment will be okay but other than will not be okay and strict mode will bot be activate then.
// We can also activate strict mode for specific function and scope, but that is not a good practice.
// Strict mode avoids accidentals bugs, it throw error when we use a variable name from future reserved keyword like interface.
// Declaring a variable without let var and const, It will throw error if we wrote "use strict" at the top.

"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can Drive 🚗");

sum(4, 5);
// Duplicate parameter name not allowed in this context
function sum(a, a) {
  c; // Uncaught ReferenceError: c is not defined
  console.log(a + b);
}
