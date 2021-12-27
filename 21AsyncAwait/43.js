console.log("Async/await");
// it makes a promise simple.
// as in promise we write to many then so to reduce the number of then we use async await.
// Async return a promise IMP.
async function harry() {
  console.log("I have been Called in inside a Function");
  const response = await fetch("https://api.github.com/users"); // whenever it seee await it will go and do other work and this process will run on background.
  console.log("Before Response");
  const users = await response.json();
  console.log("users are here");
  return users;
}

console.log("Before Calling");
a = harry();
console.log("After Calling");
console.log(a);
a.then((data) => console.log(data));
console.log("Lastline Calling");
