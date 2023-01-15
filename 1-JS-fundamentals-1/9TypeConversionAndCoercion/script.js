// Type Conversion when we manually convert
// Type Coercion when Javascript convert for us automatically.

// Type Conversion

//  int to string  using String()

let myVar = 56;
console.log(myVar, typeof myVar, myVar);
myVar2 = String(80);
console.log(myVar, typeof myVar);

//  BOOL TO STRING

let booleanVar = String(true);
console.log(booleanVar, typeof booleanVar);

// Date() TO STRING

let date2 = new Date();
console.log(date2, typeof date2);

let date = String(new Date());
console.log(date, typeof date);

//  ARRAY TO STRING

// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.length, (typeof arr));

let arr = String([1, 2, 3, 4, 5, 6]);
console.log(arr.length, typeof arr);

let i = 75;
console.log(i.toString());

let str = Number("3434");
str = Number(true);
str = Number("34d34"); // NAN not a number
console.log(str, typeof str);

let number = parseFloat("34.098");
number = parseInt("34.098");
console.log(number.toFixed(2), typeof number);

//  TYPE COERCION

console.log(1 + 2 + "69" + 79); // here the associativity rule is applied as first a+b is added then it added as string to myStr and total of that is again added to myNum

console.log("Type Coercion Done By Js auto", "6" + "4");
console.log("Type Coercion is failed by JS", "6" - "4");
console.log("Type Coercion is failed by JS", "6" * "4");
console.log("Type Coercion is failed by JS", "2" ** "4");
console.log("Type Coercion is failed by JS", "6" / "4");
