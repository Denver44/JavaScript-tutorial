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

// youTube.feature(5,"Subscribe")
// when ever we have to use a function of other object then use call method and Do not repeat Yourself.

//------------------------call Method----------------
youTube.feature.call(youTube2, 4, "Do not subscribe");
