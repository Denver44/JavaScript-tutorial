console.log("1 I am a " + job); // "I am a undefined"
var job = "Web Developer";
console.log("2 I am a " + job); // "I am a Web Developer"

function whoAMi() {
  console.log("3 I am a " + job); // "I am a undefined"
  var job = "Full Stack Developer";
  console.log("4 I am a " + job); // "I am a full tack Developer"
}
whoAMi();
