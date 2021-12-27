var numbers = [1, 2, 3];
var doubleNumber = [];

console.log(numbers);
numbers;

numbers.forEach(function (number) {
  doubleNumber.push(number * 2);
});
console.log(doubleNumber);
doubleNumber;

// USING FAT ARROW

let triple = numbers.map((num) => num * 3);
console.log(triple);
triple;

// USING OLD WAY

let Quad = numbers.map(function (num) {
  return num * 4;
});
console.log(Quad);
Quad;

const data = [
  {
    name: "DENVER",
    age: 25,
  },
  {
    name: "TOKYO",
    age: 26,
  },
];

let newData = data.map((d) => d.age * 5);
newData;
console.log(newData);

var images = [
  { height: "34px", width: "39px" },
  { height: "54px", width: "19px" },
  { height: "83px", width: "75px" },
];

var heights = images.map((img) => img.height);

var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 },
];

var speeds = trips.map((trip) => trip.distance / trip.time);
