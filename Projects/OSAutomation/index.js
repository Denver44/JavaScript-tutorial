var robot = require("robotjs");

var screenSize = robot.getScreenSize();
setTimeout(handleOpenPaint, 2000);

function handleOpenPaint() {
  robot.moveMouseSmooth(91, 748);
  robot.mouseClick();
  setTimeout(() => {
    robot.typeString("Paint");
    robot.keyTap("enter");
    setTimeout(writeHi, 4000);
  }, 1000);
}

function writeHi() {
  robot.moveMouseSmooth(400, 250);
  robot.mouseToggle("down", "left");
  robot.dragMouse(400, 450);
  robot.mouseToggle("up", "left");

  robot.moveMouseSmooth(600, 250);
  robot.mouseToggle("down", "left");
  robot.dragMouse(600, 450);
  robot.mouseToggle("up", "left");

  robot.moveMouseSmooth(400, 350);
  robot.mouseToggle("down", "left");
  robot.dragMouse(600, 350);
  robot.mouseToggle("up", "left");

  robot.moveMouseSmooth(650, 250);
  robot.mouseToggle("down", "left");
  robot.dragMouse(650, 450);
  robot.mouseToggle("up", "left");
  robot.moveMouseSmooth(91, 748);
  robot.mouseClick();
  setTimeout(openChrome, 3000);
}

function openChrome() {
  robot.typeString("Google Chrome");
  robot.keyTap("enter");
  setTimeout(() => {
    robot.keyToggle("alt", "down");
    robot.keyTap("space");
    robot.keyToggle("alt", "up");
    robot.keyTap("x");
  }, 3000);
  setTimeout(openYouTube, 7000);
}

function openYouTube() {
  robot.moveMouseSmooth(54, 87);
  robot.mouseClick();
  robot.keyTap("enter");
  setTimeout(() => {
    robot.moveMouseSmooth(404, 131);
    robot.mouseClick();
    robot.typeString("Hanuman Chalisa");
    robot.keyTap("enter");
    setTimeout(() => {
      robot.moveMouseSmooth(481, 300);
      robot.mouseClick();
    }, 3000);
  }, 4000);
}


// 94 744 for search bar below
// 54 87 youtube
// 404 131 youtube search bar
// 481 300 youtube search bar
