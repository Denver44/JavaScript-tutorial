console.log("welcome to Ajax tuts");
//------------------------------------------------ GET REQUEST ----------------------------------------------------------//

let fetchbtn = document.getElementById("fetchbtn");
let detailsp = document.getElementById("detials");
fetchbtn.addEventListener("click", buttonclickHandler);

// function buttonclickHandler() {
//   // Instatntiate an xhr object
//   const xhr = new XMLHttpRequest();

//   // 1. -----------------Open the Obejct  First step.
//   // 1st argument is method of request
//   // 2nd argument is from where u want the data ,
//   // 3rd argument for ayscnhous write true
//   xhr.open("GET", "durgesh.txt", true);
//   // xhr.open("GET", 'https://jsonplaceholder.typicode.com/todos/1', true);

//   //---------- OPTIONAL
//   // THERE are five ready state 0(UNSENT) 1(OPEN) 2(HEADERS_RECIVED) 3(LOADING) 4(DONE)
//   xhr.onreadystatechange = function () {
//     console.log(this.readyState);
//     // console.log(xhr.readyState)
//   };

//   // What do at progress time ------------- OPTIONAL
//   xhr.onprogress = function () {
//     console.log("On progress");
//   };

//   //--------------------------------- status 200 means response ok
//   xhr.onload = function () {
//     //---------- so after onlaod we have to show responseText
//     console.log(this.status);
//     if (this.status == 200) {
//       console.log(this.responseText);
//       let d = this.responseText;
//       detailsp.innerHTML = d;
//     }
//   };

//   xhr.send(); //-----------------------Last your have to send the Request
//   console.log("we are done");
// }

//-----------------POST REQUEST -------------------//

// function buttonclickHandler() {
//   // Instatntiate an xhr object
//   const xhr = new XMLHttpRequest();

//   xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
//   // We have to write this below line
//   xhr.getResponseHeader("Content-type", "application/x-www-form-urlencoded");

//   xhr.onload = function () {
//     console.log(this.status);
//     console.log(this.responseText);
//   };
//   // As this is Post request we have to give the type of data we are fetching.
//   params = {
//     name: "test13",
//     salary: "123",
//     age: "203",
//   };

//   // Last your have to send the Request
//   xhr.send(params);
// }

//------------ Fetching a Get Request and Populating on window  ------------------------------------------------------/

let popbtn = document.getElementById("popbtn");
popbtn.addEventListener("click", pophandler);

function pophandler() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true);

  xhr.onload = function () {
    let obj = JSON.parse(this.responseText); // as the data is in Json form so we have to Parse it in string./
    console.log(obj);

    let list = document.getElementById("list");
    str = "";
    for (key in obj) {
      str += `<li>${obj[key].id}</li>`;
    }
    list.innerHTML = str;
  };

  xhr.send();
  console.log("we are done");
}
