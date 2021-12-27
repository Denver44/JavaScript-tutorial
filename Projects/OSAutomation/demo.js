var robot = require("robotjs"); // this lib we require to ge the robotjs function
// robot.moveMouseSmooth(0, 0); // it takes three args first x-axis,y-axis,speed not necessary

function showMousePosition() {
  var mousepos = robot.getMousePos();
  console.log(mousepos);
  if (mousepos.x == 0 && mousepos.y == 0) {
    clear();
  }
}
var id = setInterval(showMousePosition, 1000);

function clear() {
  clearInterval(id);
}
