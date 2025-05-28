// 🔹 Challenge 1: Default Parameters (Easy)
// Create a function greet that takes two parameters: name and greeting.

// If greeting is not provided, it should default to "Hello".

// The function should return a string like "Hello, Hikmet!".

function greet(name, greeting = 'Hello') {

  return `${greeting}, ${name}`

};

console.log(greet('Hikmet'));

// 🔹 Challenge 2: Rest Parameters (Medium)
// Create a function sumAll that accepts any number of numeric arguments and returns their total using the rest operator (...args).

// Example:
// sumAll(2, 4, 6); // returns 12

function sumAll(...numbers) {
  let total = 0

  for (const num of numbers) {
    total += num;
  }
  return total
}

console.log(sumAll(1, 5, 7, 8, 9));

// 🔹 Challenge 3: Arguments Object (Harder)
// Create a function logArguments that logs how many arguments were passed in and lists them all using
// the arguments object (note: only works with regular functions, not arrow functions).

function logArguments(...args) {
  console.log(`Number of arguments: ${arguments.length}`);

  for (let i = 0; i < arguments.length; i++) {
    console.log(`Argument ${i + 1}:`, arguments[i]);
  }
}

logArguments(1, 2, 34, 4, 5, 6)