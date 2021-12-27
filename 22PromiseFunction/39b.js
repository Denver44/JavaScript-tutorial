let students = [
  {
    name: "durgesh",
    role: "Programmer",
  },
  {
    name: "Vishal",
    role: "Computer",
  },
  {
    name: "Pooja",
    role: "Computer",
  },
];

function enrollstudent(student) {
  // executor
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      students.push(student);
      let error = false;
      if (!error) {
        resolve();
      } else {
        reject();
      }
    }, 5500);
  });
}

function getstudents() {
  setTimeout(function () {
    let str = "";
    students.forEach(function (student) {
      str += `<li> ${student.name}</li>`;
    });
    document.getElementById("list").innerHTML = str;
  }, 1000);
}

let a = {
  name: "Priya",
  role: "Computer",
};
enrollstudent(a)
  .then(getstudents)
  .catch(function () {
    console.log("Some error Ocuured");
  });

// Promiswe will have two method one rsolve which is in then to show our output
// another one is catch in which we we take error.

// in then we have to pass a function
// in cathc also we have to pass a function
