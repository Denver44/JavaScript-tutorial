let data = [
  { name: "DURGESH", age: 21 },
  { name: "VISHAL", age: 21 },
  { name: "ELON", age: 50 },
  { name: "TESLA", age: null },
  { name: "EDISON", age: undefined },
];

let newdata = data.filter((Element) => {
  return Element.age != undefined;
});

console.log(newdata);


// null == undefined return true
// null === undefined return false