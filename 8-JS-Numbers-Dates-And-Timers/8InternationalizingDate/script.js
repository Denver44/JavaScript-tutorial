'use strict';

// Internationalizing Date (Intl)
const now = new Date();

const option1 = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
};

const option2 = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: '2-digit',
  weekday: 'long',
};

const currentDateUS = new Intl.DateTimeFormat('en-US').format(now);
const currentDateUK = new Intl.DateTimeFormat('en-GB').format(now);
const currentDateIN = new Intl.DateTimeFormat('en-IN', option1).format(now);
const currentDateIN2 = new Intl.DateTimeFormat('pt-PT', option2).format(now);

const locale = navigator.language;
console.log('Current local of User ', locale);

console.log(currentDateUS);
console.log(currentDateUK);
console.log(currentDateIN);
console.log(currentDateIN2);

// Internationalizing Numbers (Intl)
const num = 3884764.23;

const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR',
  // useGrouping: false,
};

console.log('US:      ', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Syria:   ', new Intl.NumberFormat('ar-SY', options).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
);
