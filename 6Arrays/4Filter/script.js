const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// The filter Method
const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals);

var images = [
  { height: 35, width: 65 },
  { height: 50, width: 19 },
  { height: 8, width: 75 },
];

let filterData = images.filter((img) => img.height > 34 && img.width > 45);
console.log(filterData);

// Example 2

var post = { id: 4, title: 'New Post' };

var comments = [
  {
    postId: 4,
    content: 'awesome post',
  },
  {
    postId: 4,
    content: 'Neat post',
  },
  {
    postId: 3,
    content: 'Nice post',
  },
  {
    postId: 4,
    content: 'Nice post 2',
  },
];

function commentsForPost(post, comments) {
  return comments.filter(function (comment) {
    return comment.postId === post.id;
  });
}

let res = commentsForPost(post, comments);
res;

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter((num) => num > 50);

// Example 3

var users = [
  { id: 1, admin: true },
  { id: 2, admin: false },
  { id: 3, admin: false },
  { id: 4, admin: false },
  { id: 5, admin: true },
];

var filteredUsers = users.filter((user) => user.admin);
filteredUsers;

//
