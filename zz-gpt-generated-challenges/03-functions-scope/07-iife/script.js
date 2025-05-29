// 🧩 Challenge 1: Basic IIFE(Easy)
// Create an IIFE(Immediately Invoked Function Expression) that logs:
// Welcome to JavaScript IIFE!

(function () {
  console.log('Welcome to JavaScript IIFE!');
})();

// 🧩 Challenge 2: IIFE with Parameters (Medium)
// Write an IIFE that accepts a user's name and age as parameters and logs:
// [Name] is [Age] years old.
// Example:
// ('John', 30) → John is 30 years old.

(function (name, age) {
  console.log(`${name} is ${age} years old`);
})('Hikmet', 47);

// 🧩 Challenge 3: IIFE with Return Value(Hard)
// Create an IIFE that takes a number and returns its square.Store the result in a variable and log it.

// Example output:
// The square is: 25

(function (number) {
  const square = number ** 2;

  console.log(square);
})(10);

// 🧩 Challenge 3: IIFE with Return Value (Hard)
// Create an IIFE that takes a number and returns its square. Store the result in a variable and log it.

// Example output:
// The square is: 25
// 🧠 Capstone Challenge: Profile Summary Generator (Advanced)
// Build a complete profile summary using IIFE and everything you've learned:

// 1. Create a user object with:
//  * firstName
//  * lastName
//  * birthYear
//  * hobbies (array)

// 2. Use an IIFE to:

//  * Format and capitalize the full name
//  * Calculate the age
//  * Return a full summary string in the format:
//
// Full Name: Hikmet Demirci | Age: 46 | Hobbies: football, coding

// Log the summary.

const user = {
  firstName: 'hikmet',
  lastName: 'demirci',
  birthYear: 1978,
  hobbies: ['football', 'reading'],
  fullName: function () {
    return `${this.firstName[0].toUpperCase()}${this.firstName.slice(1)} ${this.lastName[0].toUpperCase()}${this.lastName.slice(1)}`;
  },
  age: function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  },
  summary: function () {
    return `Full Name: ${this.fullName()} | Age: ${this.age()} | Hobbies: ${this.hobbies.join(', ')}`;
  }
};

console.log(user.summary());
