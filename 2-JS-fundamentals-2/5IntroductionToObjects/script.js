const denverArray = [
  'Denver',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
];

const denver = {
  firstName: 'Denver',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
};

// Dot vs. Bracket Notation
const denver = {
  firstName: 'Denver',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
};
console.log(denver);

console.log(denver.lastName);
console.log(denver['lastName']);

const nameKey = 'Name';
console.log(denver['first' + nameKey]);
console.log(denver['last' + nameKey]);

// console.log(denver.'last' + nameKey) // This we can't do using dot operator.

const interestedIn = prompt(
  'What do you want to know about Denver? Choose between firstName, lastName, age, job, and friends'
);

if (denver[interestedIn]) {
  console.log(denver[interestedIn]);
} else {
  console.log(
    'Wrong request! Choose between firstName, lastName, age, job, and friends'
  );
}

denver.location = 'Portugal';
denver['twitter'] = '@denverschmedtman';
console.log(denver);

console.log(
  `${denver.firstName} has ${denver.friends.length} friends, and his best friend is called ${denver.friends[0]}`
);

// Object Methods

const denver = {
  firstName: 'Denver',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // }

  // calcAge: function () {
  // Here we can use denver also in place of this but if we change the name of our object then we have to change it everyplace so thats why use this keyword.
  // console.log(this);
  //   return 2037 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      denver.job
    }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
  },
};

console.log(denver.calcAge());
console.log(denver.age);
console.log(denver.age);
console.log(denver.age);
console.log(denver.getSummary());

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
  );
}
