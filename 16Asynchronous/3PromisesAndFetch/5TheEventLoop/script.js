// The Event Loop in Practice

console.log('Test start');

setTimeout(() => console.log('0 sec timer'), 0); // This will registered in callback queue. and remember the time which we write here it is not necessary that code will execute at the given time.

Promise.resolve('Resolved promise 1').then((res) => console.log(res)); // This callback function is registered in micro task queue.

Promise.resolve('Resolved promise 2').then((res) => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});

console.log('Test end');

// Micro Task Queue has more priority than callback Queue that we can by executing this program.
