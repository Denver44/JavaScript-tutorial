console.log("We are on tut 10  last basic of JavaScript");

//** ************************** VARIABLE SCOPE CONCEPT*************************************************//
// Var has A Function Level Scope.
// LET and CONST are Block Level Scope
var a = 235;
console.log(" the total is " + a);

{
  const i = 5;
  console.log(" the total is " + i); // local
  console.log("the total is " + a); // global
}

console.log("the total is " + a);
// console.log("the total is " + i); // as  i destory as the bracket finsihed.

//--------------------------- FUNCTION LEVEL VS BLOCK LEVEL -----------------------
// function name(a) {
//   if (true) {
//     let c = "Ram";
//     console.log(c + a);
//   }
//   console.log(c + a);
// }

function name(a) {
  if (true) {
    var c = "Ram";
    console.log(c + a);
  }
  console.log(c + a);
}

name(" Mandir");

//-------------------------------- FUNCTIONS ---------------------------------------

// let name = "Durgesh";
// let name2 = "Vishal";

// console.log(`Happy birthday to ${name} who is smart,Handsome,funny &
//  reminds me a lot of myself..!`)

// // ******* FUNCTION DEFINITION NO NEED TO WRITE DATATYPES *******//

// function greeting(people, blessing = "always be happy") {

//     //  console.log(`Happy birthday to ${people} who is smart,gorgeous,funny & reminds me a lot of myself… from one fabulous chick to another! ${blessing}`)
//     let msg = `Happy birthday to ${people} who is smart,funny &reminds me a lot of myself…from one fabulous chick to another! ${blessing}`;
//     return msg;

// }
// let val = greeting(name, 'Allah bless u')
// // console.log(val)
// console.log(greeting(name2))

// // // IN A OBJECT WE CAN CREATE FUNCTION AND THERE IS NO NEED TO WRITE A FUNCTION NAME.

// // const obj = {

// //     name: "Durgesh",
// //     game: function () {
// //         return "GTA";

// //     }
// // }

// // console.log(obj.game());

// // //*********** ARRAY FUNCTION ********************//

// // By using the.forrach function alsow e can print the elements of the array.
// // arr = ["Fruit", "Vegetable", "Furniture"];

// // arr.forEach(function (element,index) {
// //     console.log(element,index);
// // });

// //************* FUNCTIONS *****************//
// // function addname(x, y) {
// //     let a = x;
// //     let b = y;
// //     document.write("<> the total is " + (a + b) + "</>");

// // }
// // addname(2, 56);
