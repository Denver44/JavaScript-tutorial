console.log(this);

function a() {
  // "use strict"
  // when we use  use strict the this is undefined in regular function.
  console.log("Inside a Function this is called");
  console.log(this);
}
a();

const obj = {
  name: "Durgesh",
  age: 24,
  sum: function b() {
    console.log("Inside a Function this is called");
    console.log(this);
    console.log(this.name);

    function c() {
      // Regular function  this will alawys refer to global object window.
      name = "Vishal Rai";
      console.log(this.name);
      console.log(this);
    }
    c();
  },
};

obj.sum();
