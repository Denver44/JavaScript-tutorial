// This is for find , findIndex and Filter.

// ---------------- FIND----------------------------
const array1 = [5, 12, 8, 130, 44];
// Here we have givern an array and we have to find the first element in the array which is grater than 12.
// This is find it return the first value which satsifies our Condition.
// Esle return undefined if not satsisfies our condition.
let a = array1.find((Element, Index, array) => {
  console.log(`${Element} is at ${Index} in array ${array}`);
  return Element > 120;
});
console.log(a);

// ---------------- FINDINDEX----------------------------

// FindIndex same as find but only one diff return Index.
// FindIndex return the Index of the element.
a = array1.findIndex((Element, Index, array) => {
  console.log(`${Element} is at ${Index} in array ${array}`);
  return Element > 120;
});
console.log(a);

// ---------------- FILTER----------------------------
// it will filter out and gives us a new array as per our condition.
a = array1.filter((Element, Index, array) => {
  console.log(`${Element} is at ${Index} in array ${array}`);
  return Element > 10;
});
console.log(a);
