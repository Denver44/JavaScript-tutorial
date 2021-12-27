// IMP NOTES
//1. To compare the value both value and dataTypes use  ===
//2. To compare the value not datatype then se ==
//3. for comparing the not equal to value use !== for both dataTypes and value

const age = 18;
let doesDrive = true;
let variable;

// In Switch case we can have  1. Number 2. string 3. boolean
// Additional feature which is not in the c and c++.

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
