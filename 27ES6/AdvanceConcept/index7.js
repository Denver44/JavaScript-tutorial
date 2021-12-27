// -------------- Currying Function------- using normal function

function sum(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return console.log(a + b + c + d);
      };
    };
  };
}

sum(5)(10)(7)(3);

// One liner using Fa t Arrow

const sum2 = (a) => (b) => (c) => (d) => (e) => console.log(a + b + c + d + e);

sum2(50)(10)(70)(30)(55);

// this is like a function inside it have args 5 in it inside it has args 10 in it inside it has 70 in it inside 30 and int inside 55.
