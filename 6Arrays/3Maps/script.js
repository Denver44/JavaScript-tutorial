const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// The map Method
const eurToUsd = 1.1;

const movementsUSDVersion1 = movements.map(function (mov) {
  return mov * eurToUsd;
});

const movementsUSDVersion2 = movements.map((mov) => mov * eurToUsd);

console.log('Original Array', movements);
console.log('Version 1 with function', movementsUSDVersion1);
console.log('Version 2 with Arrow function', movementsUSDVersion2);

// For of Loop we have to create a new array to push elements in it because it don't return a brand new array.
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map((mov, i, arr) => {
  console.log(arr);
  return `Movement ${i + 1}: You ${
    mov > 0 ? 'deposited' : 'withdrew'
  } ${Math.abs(mov)}`;
});
console.log(movementsDescriptions);

// We pass a callback function to map function with two things one is element, index but we don't call this function by itself, it is the map method who will call this function for Each of the array elements in the movement array.

// Each time when the callback function is called it will simply pass the current array elements as well as the current index and the whole array

// For each Methods create side effects, in map we don't create side effects

const data = [
  {
    name: 'DENVER',
    age: 25,
  },
  {
    name: 'TOKYO',
    age: 26,
  },
];

let newData = data.map((d) => d.age * 5);
console.log(newData);

var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map((img) => img.height);

var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 },
];

var speeds = trips.map((trip) => trip.distance / trip.time);
