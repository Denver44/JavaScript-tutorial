'use strict';

const btn = document.querySelector('.btn-country');
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
};

const renderNeighbor = (data, className) => {
  const html = htmlTemplate(data, className);
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

const getJSON = (url, errMsg = 'Something went wrong') => {
  return fetch(url).then((res) => {
    if (!res.ok) throw new Error(`${errMsg} ${res.status}`);
    return res.json();
  });
};

const fetchCountryData = function (country) {
  getJSON(`https://restcountries.com/v2/name/${country}`, 'No Country Found')
    .then((data) => {
      renderInfo(data);
      const [neighbors] = data[0].borders;
      if (!neighbors) throw new Error('This country Have No NeighBors');

      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbors}`,
        'No Country Found'
      );
    })
    .then((data) => renderNeighbor(data, 'neighbour'))
    .catch((e) => {
      renderError(e);
      console.error('error 💥 💥', e);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
};

btn.addEventListener('click', () => {
  fetchCountryData('canada');
});
