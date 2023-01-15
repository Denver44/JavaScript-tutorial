// const b = {
//   name: 'Vivek',
//   f: function () {
//     var self = this;
//     console.log('1 ', this.name); // Vivek
//     (function () {
//       console.log('2 ', this.name);
//       console.log('3 ', self.name);
//     })();
//   },
// };
// b.f();

//   Vivek

//   Vivek

// var x = 23;

var variable = 10;
(() => {
  variable_3 = 35;
  console.log(variable_3);
  //   var variable_3 = 45;
  variable_2 = 15;
  console.log(variable); // 20
})();

console.log(variable_2);
console.log(variable_3);
var variable = 30;
