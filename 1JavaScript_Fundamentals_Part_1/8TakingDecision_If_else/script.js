// IMP NOTES
//1. To compare the value both value and dataTypes use  ===
//2. To compare the value not datatype then se ==
//3. for comparing the not equal to value use !== for both dataTypes and value

const age = 18;
let doesDrive = true;
let variable;

if (age === 18) {
  console.log("I am 18");
} else if (age === 65) {
  console.log("I am 65");
} else {
  console.log("Not an 18");
}

const a = "17";

if (a !== 17) {
  console.log("I am not 18");
} else {
  console.log("i am default 18");
}

if (typeof variable == "undefined") {
  console.log("The variable is declared at least");
} else {
  console.log("The variable is not declared");
}

if (doesDrive || age > 18) {
  console.log("You can drive");
} else {
  console.log("You cannot drive");
}

console.log(age == 45 ? "Age is 45" : "Age is not 45");

// IN Switch case we can have  1. Number 2. string 3. boolean

switch (age) {
  case 18:
    console.log("You are 18");
    break;

  case 28:
    console.log("You are 28");
    break;

  case 38:
    console.log("You are 38");
    break;

  default:
    console.log("You are unknown age");
    break;
}

let x = 5;
if (x % 2 == 0) {
  document.write("<h2>Even Number</h2>");
} else {
  document.write("<h2>Odd Number</h2>");
}

let y = -9;

if (y == 0) {
  document.write("<h2>Number is 0 </h2>");
} else if (y > 0) {
  document.write("<h2>Number is positive </h2>");
} else {
  document.write("<h2>Number is negative </h2>");
}

// Additional feature which is not in the c and c++.

let day = "wednesday";
switch (day) {
  case "monday":
    document.write("<h2>1 day </h2>");
    break;
  case "tuesday":
    document.write("<h2>2 day </h2>");
    break;

  case "wednesday":
    document.write("<h2>3 day </h2>");
    break;

  default:
    document.write("<h2>wrong day </h2>");
    break;
}
