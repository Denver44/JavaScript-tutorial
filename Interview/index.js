console.log('Start');

setTimeout(function timeout() {
  console.log('I am setTimeout with O MS');
}, 0);

// window.setImmediate(() => {
//   console.log('I am window');
// });

window.queueMicrotask(() => console.log('this code runs as soon as possible!'));

console.log('End');
