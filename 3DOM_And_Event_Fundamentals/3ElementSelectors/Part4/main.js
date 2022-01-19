//  EVENT TRACKER OR EVENT LISTENERS
// use function .addEventListener('eventName',function)
// it take two arguments.
// First one is  event-name
// Second one is a function if that event occur then that function will run,

document.getElementById("heading").addEventListener("click", function (e) {
  let variable;
  console.log("You have clicked the heading");
  variable = e.target;
  variable = e.target.className;
  variable = e.target.classList;
  variable = e.target.id;

  // variable = e.offsetX;
  // variable = e.offsetY;
  variable = e.clientX;
  variable = e.clientY;
  console.log(variable);

  location.href = "//google.com";
});
