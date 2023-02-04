console.log("Welcome to tut15");

let cont = document.querySelector(`#heading`) // for query selector we have to write( #) for id.
cont = document.querySelector(`.no`) // for query selector we have to write (.) for class.
cont = document.querySelector(`.conatiner`)
// cont = cont.childNodes; // this will give all the element text spaces comment and tags
// cont = cont.children // this will give only element .
// Use more the children when u are dealing with the elements.
// console.log(cont);
// let nodeName = cont.childNodes[0].nodeName; // this will print the Node name.
// let nodeName = cont.childNodes[1].nodeName;
// let nodeName = cont.childNodes[2].nodeName;
// let nodeType = cont.childNodes[1].nodeType; // This will print the type of nOde according to the below table
// let nodeName = cont.children[5].nodeName;
// console.log(nodeType);


// Node types 
/*
1. Element
2. Attribute
3. Text node
8. Comments
9. Documents
10. doctype
*/

// let container = document.querySelector(`.conatiner`);
let container = document.querySelector(`div.conatiner`);
// console.log(container);
// console.log(container.children[1].children[0].children[2]);

// console.log(container.firstChild); // It will give the first child
// console.log(container.firstElementChild); // this will give the first element of  the document
// console.log(container.lastChild); // It will give the last child
// console.log(container.lastElementChild); // this will give the last element of  the document
// console.log(container.children); //  it will give the element
// console.log(container.childElementCount); //  it will give the total element count of child elements.

console.log(container.firstElementChild.parentNode); // it will give the parent node
console.log(container.firstElementChild.nextSibling); // this will give comment space all thing
console.log(container.firstElementChild.nextElementSibling); // it only give the element
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);  
