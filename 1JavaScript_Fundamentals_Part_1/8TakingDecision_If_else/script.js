// IMP NOTES
//1. To compare the value both value and dataTypes use  ===
//2. To compare the value not datatype then se ==
//3. for comparing the not equal to value use !== for both dataTypes and value

const age = 18;
let doesDrive = true;
let variable;

if (age === 18) console.log('I am 18');
else if (age === 65) console.log('I am 65');
else console.log('Not an 18');

const a = '17';

if (a !== 17) console.log('I am not 18');
else console.log('i am default 18');

if (typeof variable == 'undefined')
  console.log('The variable is declared at least');
else console.log('The variable is not declared');

if (doesDrive || age > 18) console.log('You can drive');
else console.log('You cannot drive');

console.log(age == 45 ? 'Age is 45' : 'Age is not 45');

let x = 5;
if (x % 2 == 0) document.write('<h2>Even Number</h2>');
else document.write('<h2>Odd Number</h2>');

let y = -9;
if (y == 0) document.write('<h2>Number is 0 </h2>');
else if (y > 0) document.write('<h2>Number is positive </h2>');
else document.write('<h2>Number is negative </h2>');
