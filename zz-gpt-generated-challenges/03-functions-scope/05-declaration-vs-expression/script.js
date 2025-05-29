// 🧩 Challenge 1: Function Declaration (Easy)
// Create a function declaration named sayHello that takes a single parameter name and logs a message:
// Hello, [name]!

// Call the function with your own name.

function sayHello(name) {
  console.log(`Hello, ${name}`);
}

sayHello('Hikmet')

// 🧩 Challenge 2: Function Expression (Medium)
// Write a function expression and assign it to a variable square.
// This function should take one parameter num and return the square of the number.

// Call the function with a value of your choice and log the result.

const square = function (number) {
  return number ** 2
}

console.log(square(5));

// 🧩 Challenge 3: IIFE (Immediately Invoked Function Expression) (Hard)
// Create an IIFE that logs "JavaScript is awesome!" when the file runs.
// Then, modify it to take a name as an argument and print:
// "[name], JavaScript is awesome!"