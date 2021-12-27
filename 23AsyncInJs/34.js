// It works like Multi Threading as this whole function compelete after then it will display.


// The settimeout make our for loop function syncroonous to asyncronous.
//  so the next instruction will be process and this process will be done in background and display after 5000 mili seconds. this is asyncnronous.
setTimeout(() => {
  for (let index = 0; index < 20; index++) {
    console.log(`This is the index number ${index}`)

  }
}, 5000);
console.log("done")