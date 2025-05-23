let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'raspberry'];

fruits.push(berries);

x = fruits[3][1];

const allFruits = [fruits, berries];

x = allFruits[1][0]; // access first array and first object in that array

x = fruits.concat(berries);

// Spread Operator
x = [...fruits, ...berries];

// Flatten Arrays
const arr = [1, 2, [3, 4], 5, [6, 7], 8];
x = arr.flat(); // flatten the array above into one continuous array

// Static Methods on Array object
x = Array.isArray(fruits); //checks if a datastructure is an array

x = Array.from('12345');

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x);
