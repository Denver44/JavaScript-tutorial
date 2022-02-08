// Example 1

var users = [
  { id: 1, admin: 'DENVER' },
  { id: 2, admin: 'RIO' },
  { id: 3, admin: 'TOKYO' },
  { id: 4, admin: 'PROFESSOR' },
  { id: 5, admin: 'LUTHER' },
];

users.find((user) => user.admin === 'TOKYO');

// Example 2

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

function findCommentsForPost(post, comments) {
  return comments.find(function (comment) {
    return comment.postId === post.id;
  });
}
findCommentsForPost(post, comments);

//
var accounts = [{ balance: -10 }, { balance: 12 }, { balance: 0 }];

var account = accounts.find((acc) => acc.balance === 12);
