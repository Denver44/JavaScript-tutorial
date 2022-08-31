const name3 = {
  firstName: 'Elon',
  lastName: 'Musk',
};

const printDetails = function (homeTown, netWorth = '') {
  console.log(
    this.firstName + ' ' + this.lastName + ' 🏠 ' + homeTown + ' 💲 ' + netWorth
  );
};

printDetails.bind(name3, ['Texas', '78B'])();
