// Js has Built in function for the date and time which is Date()

let today = new Date();
console.log(today);
console.log(typeof today); // it is object datatype as we know

// to create other date

let otherDate = new Date("06-24-2020"); // use new keyword to create a date object and then write the date in string format
otherDate = new Date("June 24 2020"); // MM-DD-YYYY
otherDate = new Date("06/24/2020");
//  otherDate = new Date("06-24-2020")
// console.log(otherDate);

let a = otherDate.getDay();
a = otherDate.getDate();
a = otherDate.getMinutes();
a = otherDate.getMonth();
a = otherDate.getMilliseconds();
console.log(a);
a = otherDate.setDate(4);
a = otherDate.setMonth(3);
a = otherDate.setFullYear(1999);
a = otherDate.setMinutes(15);
a = otherDate.setHours(9);

console.log(otherDate);
