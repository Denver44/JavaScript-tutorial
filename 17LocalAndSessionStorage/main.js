// Local storage and session storage  will save the data in the local memory so that we can read it afterwards from local storage.
// In the local session it will store for a session in key and value

// This will add in key-value Pair only
// localStorage.setItem('Name', "Morgan");
// localStorage.setItem('Name2', "MaxWell");

// To get the detail from the local storage
// let name = localStorage.getItem('Name2'); // the key should be right.
// Note:- If the item doesn't exist we will get null.

// console.log(name);

// Clears the entire local storage
// localStorage.clear();

// To clear a particular key
// localStorage.removeItem("Name");
// name = localStorage.getItem("Name2")


// We cannot add Array so we have to stringify it first so, we use JSON.stringify()
// let impArray = ["Heart", "Kidney", "Liver"];
// localStorage.setItem('Body', JSON.stringify(impArray));

// name = localStorage.getItem('Body') // this will show it as an string so now to convert it in the string using JSON.parse().
// let name = JSON.parse(localStorage.getItem('Body'))
// console.log(name[2]);

// name.forEach(element => {
//     console.log(element);
// });

//Note:- Every Website have their own different local storage.


// Storing the data for a session in session storage

// sessionStorage.setItem('Name', "King");
// sessionStorage.setItem('Name2', "Queen");
// sessionStorage.setItem('KingDom', JSON.stringify(impArray));

// sessionStorage.clear();
// localStorage.clear();

// nameList = ["King", "VIK", "VICKY"]
// localStorage.setItem("Name", nameList);
// need = (localStorage.getItem('Name'));
// console.log(need[0]);
// console.log(need[1]);
// console.log(need[2]);
// console.log(need[3]);
// console.log(need[4]);
// console.log(need[5]);
// console.log(need[6]);
// console.log(need[7]);
// console.log(typeof need[0]);

nameList = ["P", "Q", "R"];
console.log(typeof nameList);
localStorage.setItem("Name", JSON.stringify(nameList)); // takes a JavaScript object and transforms it into a JSON string

// need = []
need = JSON.parse(localStorage.getItem("Name")); // takes a JSON string and transforms it into a JavaScript object.
console.log(typeof need[0]);
console.log(need.push("D"));
console.log(need.push("A"));
localStorage.setItem("Name", JSON.stringify(need));
console.log(typeof need[3]);
console.log(typeof need);
console.log(need[3]);
console.log(need[3][0]);
console.log(need[4]);
