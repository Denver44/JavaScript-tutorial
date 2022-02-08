// let btn = document.getElementById("btn").addEventListener("click", clickFunc); // only right click
// btn = document.getElementById("btn").addEventListener("dblclick", doubleClickFunc); // dblclick event
// btn = document.getElementById("btn").addEventListener("mousedown", mouseDownFunc); // it take all right + left + middle click of mouse

function clickFunc(e) {
  // this e is a mouseEvent
  console.log("you have submitted", e);
  e.preventDefault(); // this will bypass the default setting here it will not make the webpage to submit the form
}

function doubleClickFunc(e) {
  // this e is a mouseEvent
  console.log("you have submitted", e);
  e.preventDefault(); // this will bypass the default setting here it will not make the webpage to submit the form
}

function mouseDownFunc(e) {
  // this e is a mouseEvent
  console.log("its a mouse down", e);
  e.preventDefault(); // this will bypass the default setting here it will not make the webpage to submit the form
}

// No need to click on the that place just put your mouse in and out form that place  for mouseenter function

document.querySelector(".no").addEventListener("mouseenter", function () {
  console.log(" enter");
});

document.querySelector(".no").addEventListener("mouseleave", function () {
  console.log("leave ");
});

document
  .querySelector(".container")
  .addEventListener("mousemove", function (e) {
    console.log("you trigger mouse event ", e);
    console.log(e.offsetX);
    console.log(e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},154)`;
  });
