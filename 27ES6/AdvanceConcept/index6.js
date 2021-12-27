// ----------------------------- Importance of use-strict--------------------------

// // first without using  use strict

// sum(5, 10);

// function sum(a, a) {
//   console.log((add = a + a));
// }

// // This is valid untill we dont use use strcit
// // here a will get 5 then second a will get 10 so due to name conflict now here add = 10 +10 so we get return 20

// ---------------------------------2 Now using use strict -------------------

// "use strict";
// sum(5, 10);

// function sum(a, b) {
//   let add = a + b;
//   console.log(add);
// }

// after using strict we cannot use same name as a parmenter
// we cannot create e elemnet without declaring it let or const or var.

// ---------------------------3 Arrow Fucntion -------------------------------
// Now using fat arrow function in strict mode or not strict mode we cannot call an function without declaring it or defining it.

// "use strict";

let sum = (a, b) => {
  let add = a + b;
  console.log(add);
};
sum(5, 10);
