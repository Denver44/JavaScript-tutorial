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
  async function B() {
    const res = await axios.get('http://example.com/movies.json');
    console.log('Hello 2'); // 3
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
// Question3();
