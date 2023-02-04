console.log("we are on tut 27");

// Object literals for Creating Object
// This ia also a way to create a object but it is not time efficient and space efficient so use the constructor.
let car = {
  name: "Tesal",
  price: "1cr",
  feature: function () {
    return "Auto pilto mode";
  },
};

console.log(car.name);
console.log(car.price);
console.log(car.feature());
// car.feature();

// Constructor for creating Object
// Creating constructor for cars  hwich is like a function template but the major diffrence is that we use  (this keyword) which make its constructor and by using new we create a  object of this constructor.

// ------------- TEMPLATE---------------------
function Generalcar(givenname, givenspeed) {
  this.name = givenname;
  this.speed = givenspeed;
  this.run = function () {
    console.log(`${this.name} is running`); // use backtick
  };
  this.speeddiff = function () {
    console.log(
      `${this.name} is slower than Mercdes by ${200 - this.speed}/Kmh`
    );
  };
}


// Making the object of the constructir using new()
car1 = new Generalcar(`tesla`, 120);
car2 = new Generalcar("Nissan", 140);
console.log(car1.run());
console.log(car1.speeddiff());
console.log(car2.name);
console.log(car1.name);
