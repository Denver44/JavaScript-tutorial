const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// More Ways of Creating and Filling Arrays

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log('arr', arr);

const arr2 = new Array(1, 2, 3, 4, 5, 6, 7);
console.log('arr2', arr2);

// Empty arrays + fill method

// If we pass single value then it will create an array of that length
const x = new Array(7); // This will create an array of length 7 but everything will be empty
console.log('x', x);

// If we pass two or more value with comma separated then it will create an array of that length plus it will insert that value at its position
const x2 = new Array(7, 1); // This will create an array of length 7 but everything will be empty
console.log('x2', x2);

// To fill the empty array we use .fill method
// console.log(x.map(() => 5));

x.fill(1, 3, 5); // (value, start, end)
console.log(x);
x.fill(1); // It will fill 1 entire array if we don't enter start and end pos.
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    (el) => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
});
