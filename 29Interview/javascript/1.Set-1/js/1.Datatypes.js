console.log('Type of 10 ', typeof 10);
console.log('Type of abcd ', typeof 'abcd');
console.log('Type of true ', typeof true);
console.log('Type of 9.4 ', typeof 9.5); // no separate float type
console.log('Type of undefined ', typeof undefined);
console.log('Type of null ', typeof null);

let a = { a: 10, b: 'asdasd' };
let b = [1, 2, 3];
let c = BigInt(4576474376765756756); // for > 2^53
let d = Symbol('x');

console.log(`Type of { a: 10, b: 'asdasd' } `, typeof a);
console.log('Type of [1, 2, 3] ', typeof b);
console.log('Type of BigInt(4576474376765756756) ', typeof c);
console.log('Type of Symbol(`x`) ', typeof d);

let i = 10;
console.log(typeof i);

let i2 = Number(10);
console.log(typeof i2);

let i3 = new Number(10); // never do this
console.log(typeof i3);
