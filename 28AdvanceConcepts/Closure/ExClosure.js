const Question = (name) => {
  return function (topic) {
    if (name === "Denver") {
      return `hii ${name}. Your First Question is ${topic}. `;
    }
    if (name === "Rio") {
      return `hii ${name}. Your First Question is ${topic}. `;
    }
    if (name === "Tokyo") {
      return `hii ${name}. Your First Question is ${topic}. `;
    }
  };
};

const denver = Question("Denver")("Describe Queue list Data Structure.");
const rio = Question("Rio")("Heap");
const tokyo = Question("Tokyo")("What is BST");
denver;
rio;
tokyo;
