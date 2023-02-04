let printFullNameWithHomeTown = function (homeTown, netWorth = '') {
  console.log(
    this.firstName + ' ' + this.lastName + ' 🏠 ' + homeTown + ' 💲 ' + netWorth
  );
};

let name3 = {
  firstName: 'King',
  lastName: 'Tupac',
};

// Bind Method
// Bind will return a copy which can be invoked later that's the difference between Bind call and apply.

let bindCopy = printFullNameWithHomeTown.bind(name3, ['LA', '5B']);
console.log(bindCopy);
bindCopy();
printFullNameWithHomeTown.bind(name3, ['Texas', '78B'])();
