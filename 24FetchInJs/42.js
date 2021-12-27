// // Modern Javasciprt Fetch api

// ------------------------------------ GET REQUEST -------------------------------------
// console.log("This is fetch api tutorial")

// let mybtn = document.getElementById("fetchbtn");
// let list = document.getElementById("list");

// // mybtn.addEventListener('onclick')

// function mygetdaat() {
//     url = "https://jsonplaceholder.typicode.com/todos/1"
//     fetch(url).then((response) => {
//         console.log("first then data")
//         return response.json() //---------- as we want parse data so we use json
//         // return response.text()  // in this json will get in string
//     }).then((data) => {
//         console.log("second then data")
//         console.log(data['id'])
//         console.log(data['completed'])
//         console.log(data['title'])
//     }).catch(() => {
//         console.log("some error coccured")
//     })
// }

// console.log("Before data")
// mygetdaat()
// console.log("after data")

// Modern Javasciprt Fetch api
// ------------------------------------ POST REQUEST -------------------------------------
// This is the way to create and post data.
//1. First URL
//2. then Data
//3. Params

console.log("This is fetch api tutorial");

let mybtn = document.getElementById("fetchbtn");
let list = document.getElementById("list");

// mybtn.addEventListener('onclick')

function mypostdata() {
  url = "https://reqres.in/api/users?page=2";
  data = '{"name":"CSK","job":"leader1"}';
  params = {
    method: "post", // mandatory
    headers: {
      "Content-Type": "application/json", // mandatory
    },
    body: data, // as here the data is in Json format so need to stringy or parse.
  };
  fetch(url, params)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch(() => console.log("some error coccured"));
}

console.log("Before data");
mypostdata();
console.log("after data");
