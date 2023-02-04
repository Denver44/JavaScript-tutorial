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
// OUTPUT 10 20 20 30 20 10

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

// OUTPUT 10 Undefined 20 30 20 10

// var x = 10;
// console.log('First ', x);

// function change() {
//   console.log('Hoisted X', x); // Actually for this Function x is hoisted and its value is not initialized.
//   var x = 20;
//   if (true) {
//     console.log(x);
//     var x = 30;
//     console.log(x);
//     if (true) {
//       console.log(x);
//       var x = 40;
//       console.log(x);
//     }
//   }
//   console.log(x);
// }
// change();
// console.log('Last ', x);

// -------------------------------------------------

// function changeWithVar() {
//   console.log('Hoisted X', x);
//   var x = 20;
//   if (true) {
//     console.log(x);
//     var x = 30;
//     console.log(x);
//   }
//   console.log(x);
// }
// changeWithVar();

// console.log('-------------------------------');

// function changeWithLet() {
//   let y = 20;
//   console.log('First Y', y);
//   if (true) {
//     let y = 30;
//     console.log(y);
//     if (true) {
//       let y = 500;
//       console.log(y);
//     }
//     y = 80;
//     console.log(y);
//   }
//   console.log('Last Y', y);
// }

// changeWithLet();

// // write your code here...

// for (var i = 0; i < 5; i++) {
//   (function (i) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   })(i);
// }

// IIFE Statements
// (function () {
//   console.log('Hello');
// })();

// (function () {
//   console.log(1);
//   setTimeout(function () {
//     console.log(2);
//   }, 1000);
//   setTimeout(function () {
//     console.log(3);
//   }, 0);
//   new Promise((res, rej) => console.log(5)); // Immediately
//   Promise.resolve(6).then(console.log);
//   new Promise((res, rej) => {
//     setTimeout(() => console.log(7), 0);
//   });
//   console.log(4);
// })();

// 1 5 4 6 3 7 2

// sayOtherName(); // bodu
// sayName(); // function
// var sayName = () => {
//   console.log('hello world');
// };
// function sayOtherName() {
//   console.log('world is beautiful');
// }

var x = 1;
console.log(x);
(function () {
  console.log(x);
  var x = 2;
  (function random() {
    if (true) {
      x++;
      console.log('If inside IIFE', x);
    }
    x++;
    console.log(x);
    var x = 3;
    console.log(x);
    x = 4;
    console.log(x);
  })();
  console.log(x);
})();
console.log(x);

const b = {
  name: 'Vivek',
  f: function () {
    var self = this;
    console.log('1 ', this.name); // Vivek
    (function () {
      console.log('2 ', this.name);
      console.log('3 ', self.name);
    })();
  },
};
b.f();

//   Vivek

//   Vivek

// var x = 23;

(function () {
  var x = 43;
  console.log(x);
  (function random() {
    x++;
    console.log(x);
    var x = 21;
    console.log(x);
    x = 89;
    console.log(x);
  })();
  console.log(x);
})();

function func() {
  setTimeout(() => {
    console.log('setTimeout ', x);
    console.log('setTimeout ', y);
  }, 0);

  new Promise((res, rej) => {
    console.log('Promise ', x);
    // console.log('Promise ', y);
  });

  var x = 2;
  let y = 12;
}
func();
