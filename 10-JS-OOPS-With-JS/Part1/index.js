// Never chnage the prototype of the object
// Only chnage the Prototype of your own Object.
// Object literals for craeting Object
let car = {
  name: "Tesal",
  price: 560000,
  feature: function () {
    return "Auto pilto mode";
  },
};

console.log(car.name);
console.log(car.price);
// console.log(car.feature());
car.feature();

// Constructor for creating Object
// Creating constructor for cars

function Generalcar(givenname, givenspeed) {
  this.name = givenname;
  this.speed = givenspeed;
  this.x = 100;
  this.run = function () {
    console.log(`${this.name} is running`); // use backtick
  };
  this.speeddiff = function () {
    console.log(
      `${this.name} is slower than Mercdes by ${200 - this.speed}/Kmh`
    );
  };
}
// We created a prototype for our Object.
Generalcar.prototype.getName = function () {
  return this.name;
};
Generalcar.prototype.setName = function (newname) {
  this.name = newname;
};

car1 = new Generalcar(`tesla`, 120);
car2 = new Generalcar("Nissan", 140);
car1.run();
car1.speeddiff();
console.log(car2.name);
console.log(car1.name);
car1.x++;
console.log(car1.x);
console.log(car2.x);

// This is proto function of our general car.
console.log(car1.getName());
car1.setName("TESLA X10");
console.log(car1.getName());
car1.speeddiff();

car1.setName("BENZZZZZZZZZZZZZZZZZZZZZZZZZZZZ");
let c = car1.getName();
console.log(c);
