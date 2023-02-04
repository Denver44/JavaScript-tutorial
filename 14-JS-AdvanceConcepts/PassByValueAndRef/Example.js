let likes = 100;
const youtube = {
  name: "durgesh",
  subscribers: 98000,
};

const thapa = (a, b) => {
  (a = 200), (b.subscribers = 1000000);
};

thapa(likes, youtube);
console.log(likes);
console.log(youtube.subscribers);
