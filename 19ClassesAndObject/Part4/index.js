console.log("we are on tut 31");

class Employee {
  constructor(givernName, Salary, Id) {
    this.name = givernName;
    this.Salary = Salary;
    this.idNumber = Id;
  }

  printdetails() {
    console.log(
      `The Employee Id  is ${this.idNumber} and his Name is ${this.name} and his Salary is ${this.Salary}`
    );
  }
  // -------------Static Function------------
  static add(a, b) {
    return a + b;
  }
}
// using the new keyword we have to create the objects of the classes.
emp1 = new Employee("Durgesh", 56000, 568);
emp1.printdetails();

// for static function we dont need object of class we can simply call itself by classname.
console.log("The static function result " + Employee.add(15, 16));

//********************** INHERITANCE **************************************** */

// use---------- extends------- keyword for the inheritance in the classes.
// use super() to invoke the base class constructor as u made the new constructir for the inheritance class.
class Programmer extends Employee {
  constructor(givernName, Salary, Id, Languages) {
    super(givernName, Salary, Id);
    this.lang = Languages;
  }
  printfavlang() {
    // This way we can also call the super class function---------------
    // super.printdetails()
    console.log(
      `The Employee Id  is ${this.idNumber} and his Name is ${this.name} and his Salary is ${this.Salary} his Fav language is ${this.lang[0]}`
    );
  }
}

P1 = new Programmer("Harsh", 30000, 589, ["Python", "Go"]);
P2 = new Programmer("Durgesh", 500, 698, ["JS", "Go"]);
P1.printfavlang();
P2.printfavlang();
