const post = {
  id: 1,
  title: 'Post One',
  body: 'This is the body'
}

// Convert to JSON string
const str = JSON.stringify(post)

// Parse JSON
const obj = JSON.parse(str);

const posts = [
  {
    id: 1,
    title: 'Post One',
    body: 'This is the body'
  },
  {
    id: 2,
    title: 'Post Two',
    body: 'This is the body of post2'
  }
];


// attributes in JSON is not directly accessible you need to pars it first like below.
const stringObject = JSON.stringify(posts)
const postsObject = JSON.parse(stringObject);

console.log(postsObject.title);

const str2 = JSON.stringify(posts);

console.log(post);
console.log(str);
console.log(obj);
console.log(str2);