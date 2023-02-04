// passby value.
let a = 5;
let b = a;
b = b + 10;
console.log(a);
console.log(b);

// This is pass by Refernce
let arr = [1, 2, 3];
let arr2 = arr;
arr2.push(5);
console.log(arr);
console.log(arr2);

// This is pass by Refernce
const arrayobj = {
  0: 1,
  1: 2,
  2: 3,
};
const arrayobj2 = arrayobj;
arrayobj2[3] = 4;
console.log(arrayobj);
console.log(arrayobj2);
