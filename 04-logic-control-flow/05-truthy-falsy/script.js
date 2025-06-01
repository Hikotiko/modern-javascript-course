// const email = 'test@test.com';

// if (email) {
//   console.log('You passed in an email');
// }

// Falsy Values:
// - false
// - 0
// -"" or '' (Empty string)
// - null
// - undefined
// - NaN

const f = false;

if (f) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
}

// Truthy Values:
// - Everything else that is not Falsy
// - true
// - '0' (0 in a string)
// - ' ' (space in a string)
// 'false (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)

const t = {};

if (t) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
}

// Truthy and falsy caveats
const children = 0;

if (children !== undefined) {
  // you can declare default as not undefine
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter number of children');
}

// Checking for empty arrays
const posts = ['Post One', 'Post Two'];

if (posts.length > 0) {
  console.log('List Posts');
} else {
  console.log('No Posts To List');
}

// Checking for empty object
const user = {
  name: 'Brad',
};

if (Object.keys(user).length > 0) {
  console.log('List User');
} else {
  console.log('No User');
}

// Loose Equality (==)
// these example result in true which is not completely correct
// depending on your expected result
console.log(false == 0);
console.log('' == 0);
console.log(null == undefined);

// This the way to mitigate
console.log(false === 0);
console.log('' === 0);
console.log(null === undefined);
