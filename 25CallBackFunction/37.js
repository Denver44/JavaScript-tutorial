console.log("hello")


// pretend this is coming from server
let students = [{
    name: "durgesh",
    role: "Programmer"
  },
  {
    name: "Vishal",
    role: "Computer"
  },
  {
    name: "Pooja",
    role: "Computer"
  },

]

// A function inside a Fucntion  is called Callback Function.

function enrollstudent(student, callback) {
  // as we enrlled a student so we will make requet to server thats why it will take time.
  setTimeout(function () {
    students.push(student);

    callback();
  }, 1000);

}

function getstudents() {
  setTimeout(function () {
    let str = "";
    students.forEach(function (student) {
      str += `<li> ${student.name}</li>`

    });
    document.getElementById('list').innerHTML = str;
  }, 5000);
}

a = {
  name: "Priya",
  role: "Computer"
}
enrollstudent(a,getstudents)
// getstudents()