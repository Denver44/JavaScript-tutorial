'use strict';

const countriesContainer = document.querySelector('.countries');

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

const renderInfo = ([data]) => {
  const html = htmlTemplate(data);
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderNeighbor = (data, className) => {
  const html = htmlTemplate(data, className);
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const fetchCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then((res) => res.json()) // json method return a promise that's why we chain .then on it.
    .then((data) => {
      renderInfo(data);
      const [neighbors] = data[0].borders;
      if (!neighbors) return;
      return fetch(`https://restcountries.com/v2/alpha/${neighbors}`);
    })
    .then((res) => res.json())
    .then((data) => renderNeighbor(data, 'neighbour'));
};

fetchCountryData('canada');

// Every .then() method returns a full filled promise what ever we return from it, so we can chain promises on them easily.
