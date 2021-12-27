// ---------------1--------------------
// const add = (a, b) => {
//     console.log(a + b);
// }

// add(5, 8);
// ---------------2--------------------
// This is also known as Global Function
// function greet(a, b) {
//     console.log(a() + b);
// }

// function hello() {
//     return "Hello ";
// }
// greet(hello, "world")

// const obj = {
//     name: "Rai",
//     quali: function () {
//         console.log("B.E Electrical");
//     }
// }
// obj.quali();
// ---------------3--------------------

function Robo() {
  return function Endworld() {
    console.log("finished this world");
  };
}
// This is are the way to call a function inside a function which is going to be return.
Robo()();
const fun = Robo();
fun();

const Question = (name) => {
  if (name == "Durgesh") {
    return function (topic) {
      console.log(`hii ${name}. Your First Question is ${topic}. `);
    };
  }
  if (name == "Vishal") {
    return function (topic) {
      console.log(`hii ${name}. Your First Question is ${topic}. `);
    };
  }
  if (name == "Denver") {
    return function (topic) {
      console.log(`hii ${name}. Your First Question is ${topic}. `);
    };
  }
};

Question("Durgesh")("Describe Linked list Data Structure.");
Question("Vishal")("Pointer");
Question("Denver")("What is Stack");

// This is the two way to call the higher order function.
const a = Question("Durgesh");
const b = Question("Vishal");
const c = Question("Denver");
a("Describe Queue list Data Structure.");
b("Heap");
c("What is BST");
