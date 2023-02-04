// 1. ITERATING AN OBJECT
let obj = {
  name: 'Harry',
  language: 'JavaScript',
  hobbies: 'Android app development',
};

for (let key in obj) {
  console.log(obj[key]);
}

// 2. ITERATING A STRING
myString = 'This is my string';
for (let char in myString) {
  console.log(myString[char]);
}
