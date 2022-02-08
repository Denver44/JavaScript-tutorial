// Pretend this is coming from a server as response

let a = 'Harry';
a = undefined;

// Without Try and Catch Block
// if (a != undefined) {
//   console.log('A is ', a);
// } else {
//   throw new Error('This is  undefined');
// }

try {
  functionHarry();
} catch (error) {
  console.log('Error ', error);
} finally {
  console.log('Finally Will always runs');
}

try {
  console.log('A is ', a);
} catch (error) {
  console.log('Error ', error);
} finally {
  console.log('Finally Will always runs');
}
