function greet(fathername, surname) {
  console.log("Hello Durgesh " + fathername + " " + surname);
}

function greet2() {
  console.log("Good Night ");
}

let id = setTimeout(greet, 5000, "Avan", "Rai");
// let id2 = setTimeout(greet2, 5000);
// clearTimeout(id2)
// console.log(id2)

// this is setTimeout function we get the time interval in milliseconds and just function name and we can pass the args of function int setimeout like above only.
// every settime out has a unique id.
console.log(id);
let id3 = setInterval(greet2, 1000); // after eveyr interval it will repeat it.
clearInterval(id3);
