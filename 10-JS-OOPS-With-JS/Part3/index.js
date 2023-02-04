console.log("we are on tut 30");

// Here we are going to inherit protoype.
// so here we created a objecr name of proto
const proto = {
  slogan: function () {
    return `This company is the best`;
  },
  changeName: function (newName) {
    this.name = newName;
  },
};

// -----------------------------------This creates harry object
let harry = Object.create(proto);
harry.name = "harry";
harry.role = "Programmer";
// harry.changeName("Harry2")
// console.log(harry)

// ----------------------------This also creates harry object but we have to wirte  writeable:true;
const harry1 = Object.create(proto, {
  name: {
    value: "harry",
    writable: true,
  },
  role: {
    value: "Programmer",
  },
});
harry1.changeName("Harry2");
// console.log(harry1)

// Employee constructor
function Employee(name, salary, experience) {
  this.name = name;
  this.salary = salary;
  this.experience = experience;
}

// Slogan
Employee.prototype.slogan = function () {
  return `This company is the best. Regards, ${this.name}`;
};

// Create an object from this constructor now
let harryObj = new Employee("Harry", 345099, 87);
console.log(harryObj.slogan());

// Programmer
function Programmer(name, salary, experience, language) {
  Employee.call(this, name, salary, experience); //--------------- this is inheritance.
  this.language = language;
}

// Inherit the prototype manually
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor
Programmer.prototype.constructor = Programmer;

let rohan = new Programmer("Rohan", 2, 0, "Javascript");
console.log(rohan);
