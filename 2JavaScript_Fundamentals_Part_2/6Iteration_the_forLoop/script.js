// General Loops:
//1. for
//2. while
//3. do-while

// FOR LOOP

for (let i = 0; i < 100; i++) {
  if (i === 80) {
    break;
  }
  console.log(i);
}

// WHILE LOOP

let j = 0;
while (j < 10) {
  console.log(j);
  j++;
}

// DO WHILE LOOP

let k = 0;
do {
  if (k === 5) {
    k++;
    continue; // this is for skip that part.
  }
  console.log(k);
  k++;
} while (k < 10);

let arr = [2, 5, 6, 4, 2, 3];

// EXERCISE

//  OLD METHOD TO PRINT THE LOOP ELEMENTS
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  console.log(element);
}

// FOREACH FUNCTION NEW METHOD TO PRINT THE ARRAY ELEMENT

arr.forEach(function (element, index, array) {
  console.log(element, index, array);
});

let obj = {
  name: "Rohan Das",
  age: 78,
  type: "Dangerous Programmer",
  os: "Ubuntu",
};

//  TO PRINT THE OBJECT ELEMENT

for (let key in obj) {
  console.log(`The ${key} of object is ${obj[key]}`);
}

console.log("done");

let res = 0;
for (let index = 1; index <= 10; index++) {
  res = 6 * index;
  let a = "<h5>" + "6 X " + index + "=" + res + " " + "</h5>";
  document.write(a);
}

document.write("<h1> Fibonacci sequence </h1>");

let oldTerm = 0;
let newTerm = 1;
let newsTerm = 0;
let i = 1;
document.write("<h5>" + oldTerm + "</h5>");
document.write("<h5>" + newTerm + "</h5>");

while (i != 10) {
  newsTerm = oldTerm + newTerm;
  document.write("<h5>" + newsTerm + "</h5>");
  oldTerm = newTerm;
  newTerm = newsTerm;
  i++;
}

let arr = ["denver", "rio", 5, 8, 7];

arr.forEach(function (ele, index, array) {
  console.log(ele, index, array);
});
