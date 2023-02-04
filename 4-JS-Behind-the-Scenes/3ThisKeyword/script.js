'use strict';

// console.log(this); // Window Object as it is in global Scope

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  // console.log(this); // undefined for regular functions
};
calcAge(1991);

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  // console.log(this); // It will give the lexical this  that is window for this
};
calcAgeArrow(1980);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f();

const jonas = {
  year: 1991,
  calcAge: () => {
    console.log(this); // arrow function don't have this keyword so they will give their lexical of this keyword from them that is window here.
    console.log(2037 - this.year);
  },
};
jonas.calcAge();
