'use strict';

const section1 = document.querySelector('#section--1');

// Modal window
const obsCallback = function (entries, observer) {
  entries.forEach((entry) => console.log(entry, observer));
};

const obsOptions = {
  root: null,
  threshold: [0, 0.2], // Here we can specify an array
  // for  threshold every time callback function will called when element comes in or out for viewport.
  // for 1 means when the entire element is visible in browser than only the callback function will called.
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);
