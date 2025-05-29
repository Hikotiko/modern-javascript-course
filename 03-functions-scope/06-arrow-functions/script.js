function add(a, b) {
  return a + b;
}

console.log(add(1, 2));

const add1 = (a, b) => {
  return a + b;
}

console.log(add1(2, 3));

// shorter way for one line expression
const subtract = (a, b) => a - b;

console.log(subtract(10, 5));

// shorter way for single parameters, you can leave of parantheses for a single parameter
const double = a => a * 2
console.log(double(7));

// Returning an object
const createObject = () => ({
  name: 'Brad',
})

console.log(createObject());

const numbers = [1, 2, 3, 4, 5]

// Arrays can be shorter by arrow functions

numbers.forEach(function (n) {
  console.log(n);
})

// shorter
numbers.forEach(n => console.log(n))