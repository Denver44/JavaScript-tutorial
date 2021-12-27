console.log(typeof "hello");
console.log(typeof 4);
console.log(typeof true);
console.log(typeof null); // it is error by javascipt that is type is shsowing object.
console.log(typeof {});
console.log(typeof []);

const check = () => {
  console.log("Inside a Function this is called");
};
// but still we can use it like object
check.nameff = "hello howe are u";
console.log(typeof check);
console.log(check.nameff);

const obj = {
  name: "Durgesh",
  age: 24,
};
console.log(typeof obj);
