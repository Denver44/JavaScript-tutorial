// Using Promise constructor we create Promise and it one Executor function and that function takes two arguments one is resolve and reject.

function BasicOfPromise() {
  const myFunction = (A) =>
    new Promise((res, rej) =>
      A ? res('Promise Resolved') : res('Promise Reject')
    );

  myFunction(2)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  myFunction(0)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

function lotteryPromiseFunction() {
  const lotteryPromise = new Promise((resolve, reject) => {
    console.log('Lottery draw is happening 🔮');

    setTimeout(function () {
      if (Math.random() >= 0.5) {
        resolve('You WIN 💰');
      } else {
        reject('You lost your money 💩');
      }
    }, 2000);
  });

  lotteryPromise
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
}

function PromiseWithSetTimeOut() {
  // Promisifying setTimeout
  // 1. It is not mandatory to pass both args in promise executor function
  // 2. It is not mandatory that a resolve function must have an argument

  const wait = (seconds) =>
    new Promise((resolve) => setTimeout(resolve, seconds * 1000));

  wait(1)
    .then(() => {
      console.log('1 second passed');
      return wait(2);
    })
    .then(() => {
      console.log('2 second passed');
      return wait(3);
    })
    .then(() => {
      console.log('3 second passed');
      return wait(4);
    })
    .then(() => console.log('4 second passed'));
}

// We can resolve a promise instantly
Promise.resolve('abc').then((x) => console.log(x));

// We can reject a promise instantly also
Promise.reject(new Error('Problem!')).catch((x) => console.error(x));
