const youTube = {
  name: "EasyCode",
  content: "Programming",
  feature: function (rating, msg) {
    console.log(
      `Very nice channel ${this.name} and the content related to ${this.content} is very good please rate ${rating} and ${msg}.`
    );
  },
};

const youTube2 = {
  name: "CodeTechie",
  content: "Techno",
};

// APPLY Method
youTube.feature.call(youTube2, [4, "Do not subscribe"]);

// As in array we cannot use direct math.max so use apply()  to get max value.
// this is the usage of the apply in the js.
let max = Math.max.apply(null, [1, 2, 3, 4, 55]);
console.log(max);
