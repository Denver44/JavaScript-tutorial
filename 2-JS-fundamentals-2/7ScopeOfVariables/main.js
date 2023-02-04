// VARIABLE SCOPE CONCEPT

// NOTE:- Var has A function Level Scope.
// NOTE:- LET & CONST are Block Level Scope

var a = 235;
console.log(" the total is " + a);

{
  const i = 5;
  console.log(" the total is " + i); // local
  console.log("the total is " + a); // global
}

console.log("the total is " + a);
// console.log("the total is " + i); // as  i is destroyed as the bracket finished.

//  FUNCTION LEVEL VS BLOCK LEVEL
function name(a) {
  let c = "Jack";
  if (true) {
    let c = "Trade";
    console.log(c + a);
  }
  console.log(c + a);
}

name("Knight");
