'use strict';

// Promise.any [ES2021]

// It will return first fulfilled promise and ignored reject promise.
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// If all promise reject then only error will be throw.
Promise.any([
  // Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.reject('ERROR'),
  Promise.reject('ERROR'),
  Promise.reject('ERROR'),
  // Promise.resolve('Another success'),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
