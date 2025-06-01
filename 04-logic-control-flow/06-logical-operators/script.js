console.log(10 > 20 && 30 > 15);
console.log(10 > 20 || 30 > 15);

// && - Will return first falsy value or the last value
let a;

a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;

console.log(a);

let posts = ['Post One', 'Post Two'];
posts = [];
console.log(posts[0]);

// in order not to desplay an undefined value
postMessage.length > 0 && console.log(posts[0]);
