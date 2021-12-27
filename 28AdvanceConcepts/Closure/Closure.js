const outerFun = (a) => {
  let b = 10;
  const innerFun = () => {
    console.log(`sum is ${a + b}.`);
  };
  return innerFun;
};
const inner = outerFun(5);
console.dir(inner);
