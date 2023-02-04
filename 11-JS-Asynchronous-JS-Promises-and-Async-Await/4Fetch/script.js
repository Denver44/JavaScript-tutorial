//  GET REQUEST

const getMyData = () => {
  url = 'https://jsonplaceholder.typicode.com/todos/';

  fetch(url)
    .then((response) => {
      console.log('first then data');
      return response.json(); //---------- as we want parse data so we use json
      // return response.text()  // in this json will get in string
    })
    .then((data) => {
      console.log(data);
    })
    .catch(() => {
      console.log('some error occurred');
    });
};

getMyData();

// POST REQUEST
// This is the way to create and post data, 1. First URL 2. then Data 3. Params

function postMyData() {
  url = 'https://reqres.in/api/users?page=2';
  data = '{"name":"CSK","job":"leader1"}';
  params = {
    method: 'post', // mandatory
    headers: {
      'Content-Type': 'application/json', // mandatory
    },
    body: data, // as here the data is in Json format so need to stringy or parse.
  };
  fetch(url, params)
    .then((response) => response.json()) // It res.json() returns a promise
    .then((data) => console.log(data)) // thats why we chain on it to get data.
    .catch(() => console.log('some error occurred'));
}

postMyData();
