// == loosely equal
// === strictly equal

console.log(`1 == '1'`, 1 == '1'); // true
console.log(`1 === '1'`, 1 === '1'); // false

console.log('' == 0); // true
console.log('' === 0); // true

console.log('(0).toString()', (0).toString()); // -> '' not the case
console.log(`Number('')`, Number(''));

//  for complex objects

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr3 = arr1;

console.log(arr1 === arr2); // because L Value is not same (no need to even check R Value)
console.log(arr1 == arr2);
console.log(arr1 === arr3); // true because they are same object (L Value same)
