let element = document.createElement("li"); // here we have a created a li name element which we want to insert after durgesh
let text = document.createTextNode("Hello denver"); // 2nd we created a text which he added to the li.
element.appendChild(text);

// Adding class name to the Li element
element.className = "childul"; // here we have given the class name to the newly madeli
element.id = "createdLi"; // here we have given the id name to the element

// we can add as many atteribute to the this.
element.setAttribute("title", "mytitle");
// element.innerText = "hello denver"; // here we added the text in that li
// element.innerHTML = `<b> Hello Denver </b>`;

let al = document.querySelector("ul.this"); // after adding or craeting li we are inserting that li in the ul.this class.
// console.log(al); // al get the ul.this class.
// console.log(element);

al.appendChild(element); // now we are appending the li craeted in tot the al.

let elem2 = document.createElement("span");
elem2.id = "elem2";
elem2.className = "elem2";
let text2 = document.createTextNode("Replacing denver");
elem2.appendChild(text2);

element.replaceWith(elem2); // This wasy we can replace an element with another elelemnt

// let myul = document.getElementById('myul');
// myul.replaceChild(element, document.getElementById('fui')); // this will only repace the one child not the whole child
// myul.removeChild(document.getElementById('lui')); // this will remoive the child
// pr = elem2.getAttribute('class') // this will print the class name of the that element
// pr = elem2.getAttribute('id') // this will print the id name of the that element
// pr = elem2.hasAttribute('id') // if it has that attribute it will print yes or no
// elem2.setAttribute('title', 'myelement2')
// console.log(elem2);

// let head = document.createElement('h1');
// head.id = "newhead";
// head.className = "newhead";
// console.log(head);
// let texthead = document.createTextNode("Go to Facebook.com");
// head.appendChild(texthead);

// let nn = document.querySelector('ul.this');
// nn.appendChild(head)

// document.getElementById("newhead").addEventListener('click', function () {
// location.href = "//www.facebook.com"
// })
