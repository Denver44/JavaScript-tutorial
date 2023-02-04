var globalEC = "added";

function a() {
  var fa = "2 nd Function o/p1";
  console.log(fa);
  debugger;
  b();
  console.log("lets see when i will be on Console.");
}

function b() {
  debugger;
  console.log("2nd function o/p2");
  c();
}

function c() {
  debugger;
  console.log("3rd function o/p1");
}
debugger;
a();
