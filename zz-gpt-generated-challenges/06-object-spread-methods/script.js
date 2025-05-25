// 🟢 Challenge 1: Copy an Object with the Spread Operator

// You are given this object:

// let user = {
//   name: "Sam",
//   age: 30
// };

// Task:
// Create a new object called userCopy that contains the same properties using the spread operator.
// Then, log userCopy.

let user = {
  name: 'Sam',
  age: 30,
};

let userCopy = { ...user };

console.log(userCopy);

// 🟡 Challenge 2: Merge Two Objects Using Spread

// You are given two objects:

// let contact = {
//   email: "sam@example.com"
// };

// let profile = {
//   name: "Sam",
//   age: 30
// };

// Task:
// Create a new object called fullUser that combines both objects using the spread operator.
// Then, log fullUser.

let contact = {
  email: 'sam@example.com',
};

let profile = {
  name: 'Sam',
  age: 30,
};

let fullUser = { ...profile, ...contact };

console.log(fullUser);

// 🔵 Challenge 3: Add a Method to an Object

// You are given this object:

// let calculator = {
//   a: 5,
//   b: 3
// };

// Task:
// Add a method named add to the object that returns the sum of a and b.
// Then, call calculator.add() and log the result.

let calculator = {
  a: 5,
  b: 3,
  add: function () {
    return this.a + this.b;
  },
};

console.log(calculator.add());
