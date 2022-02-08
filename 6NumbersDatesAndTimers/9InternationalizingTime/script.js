'use strict';

// Internationalizing Numbers (Intl)
const num = 3884764.23;

// UNIT< PERCENT AND CURRENCY ARE THE THREE DIFFERENT STYLE.

const options1 = {
  style: 'unit',
  unit: 'mile-per-hour',
  // useGrouping: false, // Print number without separator.
};

const options2 = {
  style: 'currency',
  currency: 'USD',
  // useGrouping: false,
};
const options4 = {
  style: 'currency',
  currency: 'INR',
  // useGrouping: false,
};

const options3 = {
  style: 'unit',
  unit: 'celsius',
  // useGrouping: false,
};
console.log('US:      ', new Intl.NumberFormat('en-US').format(num));
console.log('IN:      ', new Intl.NumberFormat('en-IN').format(num));

console.log('US:      ', new Intl.NumberFormat('en-US', options1).format(num));
console.log('IN:      ', new Intl.NumberFormat('en-IN', options1).format(num));

console.log('US:      ', new Intl.NumberFormat('en-US', options2).format(num));
console.log('IN:      ', new Intl.NumberFormat('en-IN', options4).format(num));

console.log('US:      ', new Intl.NumberFormat('en-US', options3).format(num));
console.log('IN:      ', new Intl.NumberFormat('en-IN', options3).format(num));

console.log('Germany: ', new Intl.NumberFormat('de-DE', options2).format(num));
console.log('Syria:   ', new Intl.NumberFormat('ar-SY', options2).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options1).format(num)
);
