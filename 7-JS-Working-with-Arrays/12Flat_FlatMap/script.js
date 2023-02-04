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

// flat and flatMap
// In Flat we can go just one level deep if we don't mentioned it.
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

// In Flat we can go just one level deep.
const arrDeep = [[[1, 2], 3], [4, [[5, 6]]], 7, 8];
console.log(arrDeep.flat());
console.log(arrDeep.flat(1));
console.log(arrDeep.flat(2));
console.log(arrDeep.flat(3)); // We have to enter the max deep level to flat the array.

const overallBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// Overall Moment of ach person
const overallBalance2 = accounts.map((acc) => {
  return {
    ownerName: acc.owner,
    overallMov: acc.movements.flat().reduce((acc, mov) => acc + mov, 0),
  };
});

console.log(overallBalance2);

// flatMap is combo of flat and map it make to increase the performance.
// It go only one level deep if we go to more than one level use flat.
const overallBalance3 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance3);
