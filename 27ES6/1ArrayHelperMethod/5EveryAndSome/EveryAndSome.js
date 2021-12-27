// Example 1
var users = [
  { age: 15, admin: "DENVER" },
  { age: 20, admin: "RIO" },
  { age: 13, admin: "TOKYO" },
  { age: 14, admin: "PROFESSOR" },
  { age: 25, admin: "LUTHER" },
];

users.every((e) => e.age >= 13);

// Example 2

var arr = ["DENVER", "TOKYO ", "RIO"];

arr.every((e) => e.length >= 1);
arr.some((e) => e.length >= 6);

// Example 3

function Field(value) {
  this.value = value;
}

Field.prototype.validate = function () {
  return this.value.length > 5;
};

var userName = new Field("DENVER");
var passWord = new Field("my_password");
var birthDate = new Field("10/10/2015");

var fields = [userName, passWord, birthDate];

fields.every((e) => e.validate());

// Example 4
var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true },
];

var hasSubmitted = users.every((e) => e.hasSubmitted);

// Example 5

var requests = [
  { url: "/photos", status: "complete" },
  { url: "/albums", status: "pending" },
  { url: "/users", status: "failed" },
];

var inProgress = requests.some((e) => e.status === "pending");
