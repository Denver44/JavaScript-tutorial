// NORMAL FUNCTION
const addTwo = function add(a, b) {
  return a + b;
};

addTwo(5, 8);

// FAT ARROW FUNCTIONS OR ARROW FUNCTIONS

const add = (a, b) => {
  return a + b;
};
add(5, 6);

const numbers = [1, 2, 3];

numbers.map((num) => num * 2);

const fibonacci = (n) => {
  if (n < 3) return 1;
  else return fibonacci(n - 1) + fibonacci(n - 2);
};

fibonacci(5);

const team = {
  members: ["Jane", "Bill"],
  teamName: "Super Squad",
  teamSummary: function () {
    return this.members.map(function (member) {
      return `${member} is on team ${this.teamName}`;
    }.bind(this));
  }
};
team.teamSummary()



const team = {
  members: ["Jane", "Bill"],
  teamName: "Super Squad",
  teamSummary: function () {
    return this.members.map((member) => {
      return `${member} is on team ${this.teamName}`;
    });
  }
};
team.teamSummary()
