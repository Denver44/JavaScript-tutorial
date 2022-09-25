// let x = 10;
// console.log(x);

// function change() {
//   let x = 20;
//   console.log(x);
//   if (true) {
//     let x1 = 30;
//     console.log(x, x1);
//   }
//   console.log(x);
// }
// change();
// console.log(x);

// -------------------------------------------------

// var x = 10;
// console.log('First ', x);

// function change() {
//   console.log('Hoisted X', x); // Actually for this Function x is hoisted and its value is not initialized.
//   var x = 20;
//   if (true) {
//     console.log(x);
//     var x = 30;
//     console.log(x);
//   }
//   console.log(x);
// }
// change();
// console.log('Last ', x);

function changeWithVar() {
  console.log('Hoisted X', x);
  var x = 20;
  if (true) {
    console.log(x);
    var x = 30;
    console.log(x);
  }
  console.log(x);
}
changeWithVar();

console.log('-------------------------------');

function changeWithLet() {
  let y = 20;
  console.log('First Y', y);
  if (true) {
    let y = 30;
    console.log(y);
  }
  console.log('Last Y', y);
}

changeWithLet();
