const youTube = {
  name: "EasyCode",
  content: "Programming",
  feature: function () {
    console.log(
      `Very nice channel ${this.name} and the content related to ${this.content}`
    );
  },
};

let you = youTube.feature;
you(); // This will throw error

//  BIND METHOD
let you2 = youTube.feature.bind(youTube);
you2();

// ------------- BIND A FUNCTION WITH A OBJECT ALSO------------------------
const youTube1 = {
  name: "Tech Hunter",
  content: "Programming1",
};

function features() {
  console.log(
    `Very nice channel ${this.name} and the content related to ${this.content}`
  );
}

let you3 = features.bind(youTube1);
you3();

// The bind() method takes an object as an first arguments and creates a new function.
// The bind method take first argument is object.
