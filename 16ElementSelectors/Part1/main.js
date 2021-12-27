

// Element selectors in Js
// 1. Single element selector
// 2. Multi element selector


// 1. Single element selector
// let element = document.getElementById("myfirst"); // this function will give the element by id name
// element = element.className // this will give the element class name.
// element = element.childNodes
// element = element.parentNode
// console.log(element);
// element.style.color = "red"; // this will direct apply to the element
// element.innerText = "khan"; // this will change the inner text
// element.innerHTML = `<b>SRK is a good boy</b>`; //<b>bold</b>
// console.log(element.innerHTML);


// Query selector
// we can target ID,class and html element  
// id by using #IDName
// class by using .className
// element by its name div,head,b  etc.

// let sel = document.querySelector('#myfirst'); // # for id
// sel = document.querySelector(".child"); // . for child
// sel = document.querySelector("b"); // bold tag element
// sel = document.querySelector("h1"); // head tag element
// sel = document.querySelector("div"); // first div will be get not all 
// sel.style.color = "green"
// console.log(sel); 


// 3. Multi element Selector

let elem = document.getElementsByClassName(`child`);

console.log(elem[0]);
console.log(elem[1]);
console.log(elem[2]);
console.log(elem[3]);

// elem = document.getElementsByClassName('container');
// elem = document.getElementsByTagName('div');
// console.log(elem);

// for (let index = 0; index < elem.length; index++) {
//     const element = elem[index];
//     console.log(element);
//     element.style.color = 'red';

// }


// ANOTHER METHOD TO ITERATE ALL THE ELEMENT OF THE DIV 

// Array.from(elem).forEach(element => {
//     console.log(element);
//     element.style.color = `blue`;
// });
// console.log(elem[0].getElementsByClassName(`child`));