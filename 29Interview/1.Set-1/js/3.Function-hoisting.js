h1();
console.log('var a hoisted : ', a);

// h2() // ReferenceError: Cannot access 'h2' before initialization
// h3() // TypeError: h3 is not a function
// h4(); // TypeError: h3 is not a function

// console.log(b); // TDZ
// console.log(c); // TDZ

// functions get hoisted with their definition
function h1() {
  console.log('H1 Function');
}

// Function Expression doesn't get hoisted
let h2 = function () {
  console.log('H2 Function');
};

var h3 = function () {
  console.log('H3 Function');
};

var h4 = () => console.log('H4 Function');

h1();
h2();
h3();
h4();

var a = 8;
let b = 5;
const c = 9;
console.log(a, b, c);
