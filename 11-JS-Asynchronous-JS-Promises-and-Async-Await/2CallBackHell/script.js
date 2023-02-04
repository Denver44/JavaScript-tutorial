'use strict';

// This was Old method we used to create an AJAX Request

const countriesContainer = document.querySelector('.countries');
// Our First AJAX Call: XMLHttpRequest

const htmlTemplate = (data, className = '') => {
  return `<article class="country ${className}">
    <img class="country__img" src="${data.flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}M people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>`;
};

const getCountryData = function (country) {
  const request = new XMLHttpRequest(); // We call this function and store the data in request variable.

  // (TYPE OF REQUEST, URL)
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send(); // Request Send and it will be fetch in background

  // We have added a event listener of load  on our Request.
  // As soon as data is loaded below callback function will be called.
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = htmlTemplate(data);
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;

    const [neighbors] = data.borders;

    console.log(neighbors);

    const request2 = new XMLHttpRequest();

    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbors}`);
    request2.send(); // Request Send and it will be fetch in background

    request2.addEventListener('load', function () {
      const data = JSON.parse(this.responseText);
      console.log(data);

      const html = htmlTemplate(data, 'neighbour');
      countriesContainer.insertAdjacentHTML('beforeend', html);
      countriesContainer.style.opacity = 1;
    });
  });
};

// getCountryData('india');
getCountryData('usa');
// getCountryData('uk');

setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 second passed');
      setTimeout(() => {
        console.log('4 second passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
