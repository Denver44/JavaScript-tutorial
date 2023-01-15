// 1. Example

function createGreeter(greeting) {
  return (greet = (name) => console.log(greeting + ' ' + name + '!'));
}

const gm = createGreeter('Good Morning');
const ge = createGreeter('Good Evening');

gm('Scaler');
ge('Scaler');

// 2. Example

const arr = [1, 14, 2, 45, 13, 46, 654, 3, 23, 21];
function incComp(a, b) {
  return a < b;
}

console.log(arr.sort(incComp));
