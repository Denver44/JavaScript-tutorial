const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

// accumulator -> SNOWBALL
const balanceVersion1 = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
console.log(balanceVersion1);

const balanceVersion2 = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balanceVersion2);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);

// Accumulator is not just ad or subtract value we can use logical condition and find min and max value also and many more do research.

var primaryColors = [{ color: 'red' }, { color: 'blue' }, { color: 'green' }];

// Reduce take two arguments call back function and other initial value or container
let res = primaryColors.reduce((newArr, primaryColor) => {
  newArr.push(primaryColor.color);
  return newArr; // We have to return value so that old acc value can be replace by new acc value.
}, []);

console.log('RES', res);

// // Example 3
function balanceParens(string) {
  return !string.split('').reduce((prev, char) => {
    if (prev < 0) return prev;
    if (char === '(') return ++prev;
    if (char === ')') return --prev;
    return prev;
  }, 0);
}
let res2 = balanceParens(')))(((');
console.log('RES2', res2);

var trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];
var totalDistance = trips.reduce((tot, trip) => tot + trip.distance, 0);
console.log('totalDistance', totalDistance);

var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'none' },
];

var deskTypes = desks.reduce(
  function (initial, desk) {
    if (desk.type === 'sitting') {
      return { sitting: (initial.sitting += 1), standing: initial.standing };
    } else if (desk.type === 'standing') {
      return { sitting: initial.sitting, standing: (initial.standing += 1) };
    }
    return initial;
  },
  { sitting: 0, standing: 0 }
);
console.log('deskTypes', deskTypes);
