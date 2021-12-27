function* colors() {
  yield "RED";
  yield "GREEN";
  yield "BLUE";
}
let color = colors();
color.next();
color.next();
color.next();
color.next();

// This is basically use fo generators

let colorsArr = [];
for (let col of colors()) {
  colorsArr.push(col);
}
colorsArr;

// PERFECT USE OF GENERATOR

const engineeringTeam = {
  size: 3,
  department: "Engineering",
  lead: "Jill",
  manager: "Alex",
  engineer: "Dave",
};

function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
}
let team = [];
for (let members of TeamIterator(engineeringTeam)) {
  team.push(members);
}
team;
