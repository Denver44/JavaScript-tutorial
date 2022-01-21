// Sorting Arrays
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log('Actual Array ', owners);

// Sorting on strings will sort the elements of string by the order of alphabets
// Sorting and Reverse both mutate our actual array.
console.log(owners.sort());
console.log(owners.sort().reverse());

console.log('Actual Array ', owners);

// Numbers
console.log(movements);

// If we sort numbers array without comparators it will get sort by alphabetical order the sort function convert the numbers in string and then it will sort it.
console.log(
  'Sorting movements array without comparator function',
  movements.sort()
);

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);
