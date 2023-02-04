// -------------- ASI ------ automatic semicolon insertion

// it will read the line put the semiclon automatic
let a = 10;
console.log(a);

// Exception case for incremnt and decremtn
// here after x it will put ;
// and after ++y it will put ;

let x = 1,
  y = 1;
x;
++y;
console.log(x, y);

function helper() {
  return {
    foo: 1,
  };
}

const a1 = helper();
console.log(a1);

// First of all you should know which statements are affected by the automatic semicolon insertion (also known as ASI for brevity):

// empty statement
// var statement
// expression statement
// do-while statement
// continue statement
// break statement
// return statement
// throw statement


