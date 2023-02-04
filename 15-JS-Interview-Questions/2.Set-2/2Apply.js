let printFullNameWithHomeTown = function (homeTown, netWorth = '') {
  console.log(
    this.firstName + ' ' + this.lastName + ' 🏠 ' + homeTown + ' 💲 ' + netWorth
  );
};

let name3 = {
  firstName: 'King',
  lastName: 'Tupac',
};

printFullNameWithHomeTown.call(name3, 'california');
printFullNameWithHomeTown.call(name3, 'california', '1.56B');
printFullNameWithHomeTown.apply(name3, ['Chicago', '2B']); // There is only difference with call and apply that is the second args is pass here as the array list.
