function* colors() {
  yield 'RED';
  yield 'GREEN';
  yield 'BLUE';
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
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
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

console.log('this is tutorial 53');
// Generators in JavaScript
// 1 - 1B

function* numbersGen() {
  let i = 0;

  // yield 1;
  // yield 2;
  // yield 3;
  // yield 4;
  while (true) {
    yield i++;
    // yield (i++).toString();
  }
}

const gen = numbersGen();
console.log(gen.next().value);
console.log(gen.next().value);
