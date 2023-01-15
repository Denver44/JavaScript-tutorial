function Question4() {
  setTimeout(function timeout() {
    console.log('I am setTimeout with O MS');
  }, 0);

  // window.setImmediate(() => {
  //   console.log('I am window');
  // });

  window.queueMicrotask(() =>
    console.log('this code runs as soon as possible!')
  );
}

function Question1() {
  console.log('Hello 1');

  setTimeout(() => {
    console.log('Hello 2');
  }, 1000);

  setTimeout(() => {
    console.log('Hello 3');
  }, 0);

  window.queueMicrotask(() => {
    console.log('Hello 4');
  });

  console.log('Hello 5');
}

function Question2() {
  while (1) {
    setTimeout(() => {
      console.log('Why i am not printing');
    }, 1000);
  }
}

function Question3() {
  const fetchCountryData = function (country) {
    fetch(`https://restcountries.com/v2/name/${country}`)
      .then((res) => res.json()) // json method return a promise that's why we chain .then on it.
      .then((data) => renderInfo(data));
    console.log('Hello 2'); // 3
  };

  async function B() {
    fetchCountryData('usa');
  }
  function A() {
    console.log('Hello 1'); // 1
    B();
    console.log('Hello 3'); // 2
  }
  A();
}

// Question1();
// Question2();
Question3();

// -------------------------------------------------
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  })(i);
}

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// -------------------------

var x = 10;

function print() {
  console.log(x);
  var x = 20;
}
// ---------------------
var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

var [x, y, z, , , a] = arr;
console.log(x, y, z, a); // 10 20 30 60

var [x, y, z, ...a] = arr;
console.log(x, y, z, a); // 10 20 30 (7) [40, 50, 60, 70, 80, 90, 100]

// - undefined vs null
console.log(undefined === undefined); // True
console.log(null === null); // True

console.log(undefined == null); // True
console.log(undefined === null); // False

console.log(undefined == 0); // false
console.log(undefined === 0); // false

console.log(null == 0); // false
console.log(null === 0); // false

console.log(undefined == ''); //false
console.log(undefined === ''); // false

console.log(null == ''); //false
console.log(null === ''); // false
