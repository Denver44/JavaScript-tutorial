'use strict';

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

// Promise.allSettled it will not short circuit and i will return all the result all the result of async call.

// Right now it os not working but soon it will work.
// const get3Countries = async function (c1, c2, c3) {
//   try {
//     const data = await Promise.allSettled([
//       getJSON(`https://restcountries.com/v2/name/${c1}`),
//       getJSON(`https://restcountries.com/v2/name/${c2}`),
//       getJSON(`https://restcountries.com/v2/name/${c3}`),
//     ]);
//     console.log(data);
//     const res = data.map((d) => d[0]);
//     console.log('First RES : ', res);
//   } catch (err) {
//     console.error(err);
//   }
// };

// get3Countries('portugal', 'canada', 'tanzania');

Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
]).then((res) => console.log(res));
