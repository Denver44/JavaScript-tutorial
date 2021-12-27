// Example 1
var numbers = [5, 10, 15];

let res = numbers.reduce((sum, num) => sum + num, 50);
res;

// Example 2

var primaryColors = [{ color: "red" }, { color: "blue" }, { color: "green" }];

let res = primaryColors.reduce(
  (newArr, primaryColor) => {
    newArr.push(primaryColor.color);
    return newArr;
  },

  []
);

res;
// Example 3
function balanceParens(string) {
  return !string.split("").reduce((prev, char) => {
    if (prev < 0) return prev;
    if (char === "(") return ++prev;
    if (char === ")") return --prev;
    return prev;
  }, 0);
}
let res = balanceParens(")))(((");
res;

// Example 4

var trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];

var totalDistance = trips.reduce((tot, trip) => tot + trip.distance, 0);

// Example 5

var desks = [
  { type: "sitting" },
  { type: "standing" },
  { type: "sitting" },
  { type: "sitting" },
  { type: "standing" },
];

var deskTypes = desks.reduce(
  function (initial, desk) {
    if (desk.type === "sitting") {
      return { sitting: (initial.sitting += 1), standing: initial.standing };
    } else if (desk.type === "standing") {
      return { sitting: initial.sitting, standing: (initial.standing += 1) };
    }

    return initial;
  },
  { sitting: 0, standing: 0 }
);
deskTypes;
