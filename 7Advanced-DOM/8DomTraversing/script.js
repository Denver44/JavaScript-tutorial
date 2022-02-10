'use strict';

// DOM Traversing
const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelectorAll('.highlight')); // We can do querySelectorAll on element
console.log(h1.querySelector('.highlight')); // We can do querySelectorAll on element

console.log(h1.childNodes); // This will list all the Node whether its text, comment or element.

console.log(h1.children); // it will only give its element.

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
console.log(h1.parentNode); // We can access a parent node for a element
console.log(h1.parentElement);

console.log('Closest ', h1.closest('.header')); // Closest will always gives it parent node how deep outside it is
h1.closest('.header').style.background = 'var(--gradient-secondary)';
//
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });
