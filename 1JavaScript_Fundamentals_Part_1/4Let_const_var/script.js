// Variable in JS
// 1. var  -> the var is very old we use in the old javascript. [NowaDays we don't use this]
// 2. let -> In modern days we mostly use let and const and let is a scape defined variable.
// 3. const -> This make the variable const so u cannot redefined it but u can add elements on it. but u cannot change a element value after its declaration.

var name = "denver"; // we can write string in single Quote.
var name2 = "denver"; // we can write string in Double Quote.
var name3 = `d"e"denver`; // we can write string in backtick in modern days use mostly backtick.
console.log(name, name2, name3);

var $city = "delhi";

// CONST

const ownersName = "Jack";
// ownersName= "Jack trade "  // this i cant do because ownersName is const so no re definition.
console.log(ownersName);

const PI = 3.14;

// LET

let king = "denver";
console.log("king Name 👑", king);

{
  // only applicable in a defined scope.
  let name = "Adonis";
  console.log(name);
}
// console.log(name);
