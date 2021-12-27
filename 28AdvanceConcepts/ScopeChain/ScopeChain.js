var a = "Hello Guys ";

function first() {
  var b = "how are you... ";
  second();

  function second() {
    var c = "Myself DUrgesh Rai";
    console.log(a + b + c);
  }
}
first();

function three() {
  var d = "Myself Vishal Rai";
  console.log(a + d);
}

three();
