'use strict';

// This was Old method we used to create an AJAX Request

const countriesContainer = document.querySelector('.countries');
// Our First AJAX Call: XMLHttpRequest

const htmlTemplate = (data) => {
  return `<article class="country">
    <img class="country__img" src="${data.flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}M people</p>
    </div>
  </article>`;
};

const getCountryData = function (country) {
  const request = new XMLHttpRequest(); // We call this function and store the data in request variable.

  // (TYPE OF REQUEST, URL)
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send(); // Request Send and it will be fetch in background

  // We have added a event listener of load  on our Request.
  // As soon as data is loaded below callback function will be called.
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    // console.log(data);

    const html = htmlTemplate(data);
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('india');
getCountryData('usa');
getCountryData('uk');

function getXHRRequest() {
  // Create an xhr object
  const xhr = new XMLHttpRequest();

  // 1.Open a request First.
  // 1st argument is method of request
  // 2nd argument is URL,
  // 3rd argument for async write true
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/', true);

  /*
   There are five ready state 
  0(UNSENT)
  1(OPEN)
  2(HEADERS_RECEIVED) 
  3(LOADING)
  4(DONE)
  */

  xhr.onreadystatechange = function () {
    console.log(this.readyState);
  };

  // What do at progress time - OPTIONAL
  xhr.onprogress = function () {
    console.log('On progress');
  };

  //status 200 means response ok
  xhr.onload = function () {
    //so after onload we have to show responseText
    console.log(this.status);
    if (this.status == 200) {
      console.log(JSON.parse(this.responseText));
    }
  };
  xhr.send(); // Last your have to send the Request
  console.log('we are done');
}

getXHRRequest();

// POST REQUEST

function postXHRRequest() {
  // Create an xhr request
  const xhr = new XMLHttpRequest();

  xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
  // We have to write this below line
  xhr.getResponseHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onload = function () {
    console.log('POST REQUEST ', this.status);
    console.log('POST REQUEST RES ', this.responseText);
  };
  // As this is Post request we have to give the type of data we have to send.
  const params = {
    name: 'test13',
    salary: '123',
    age: '203',
  };
  // Last your have to send the Request
  xhr.send(params);
}

postXHRRequest();
