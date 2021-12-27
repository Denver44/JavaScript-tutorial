// REST OPERATOR
function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// SPREAD OPERATOR
const color1 = ["RED", "GREEN"];
const color2 = ["ORANGE", "BLUE"];

[...color1, ...color2];
["YELLOW", ...color1, ...color2];

const MathLibrary = {
  calculateProduct(a, b) {
    return a * b;
  },
  multiply(a, b) {
    return a * b;
  },
};

MathLibrary.calculateProduct(5, 6);

const MathLibrary = {
  calculateProduct(...rest) {
    console.log("THIS IS DEPRECATED FUNCTION NOW USE multiply Function");
    return this.multiply(...rest);
  },
  multiply(a, b) {
    console.log("This your New functions");
    return a * b;
  },
};

MathLibrary.calculateProduct(5, 6);
