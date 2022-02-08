// FindIndex is brother of find it just return the index of the element in array rather than the element of array.
// Example 1

var users = [
  { id: 1, admin: 'DENVER' },
  { id: 2, admin: 'RIO' },
  { id: 3, admin: 'TOKYO' },
  { id: 4, admin: 'PROFESSOR' },
  { id: 5, admin: 'LUTHER' },
];

let ele = users.find((user) => user.admin === 'TOKYO');
console.log('Find Method', ele);
let idx = users.findIndex((user) => user.admin === 'TOKYO');
console.log('FindIndex Method', idx);

var post = { id: 4, title: 'New Post' };
var comments = [
  {
    postId: 41,
    content: 'awesome post',
  },
  {
    postId: 40,
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

const findCommentsForPost = (post, comments) =>
  comments.find((comment) => comment.postId === post.id);

let comment = findCommentsForPost(post, comments);

console.log(comment);

//
var accounts = [{ balance: -10 }, { balance: 12 }, { balance: 0 }];
var account = accounts.find((acc) => acc.balance === 12);
