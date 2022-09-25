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
