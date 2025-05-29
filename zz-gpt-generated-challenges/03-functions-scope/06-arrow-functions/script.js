// 🧩 Challenge 1: Basic Arrow Function (Easy)
// Convert the following function to an arrow function:
// function greet(name) {
//   return `Hello, ${name}`;
// }
// ➡️ Use an arrow function to achieve the same output.

const greet = (name) => {
  return `Hello, ${name}`
}

// shorter alternative
const greetShort = name => `Hello, ${name}`

console.log(greet('Kader'))
console.log(greetShort('Hikmet'));

// 🧩 Challenge 2: Implicit Return (Medium)
// Write an arrow function named getInitials that takes two parameters: firstName and lastName.

// It should return the initials in uppercase like "JD".

// ✅ Example:
// getInitials('john', 'doe'); // "JD"

const getInitials = (firstName, lastName) => {
  return firstName[0] + lastName[0]

  // probable improvement:
  // Capitalization firstName[0].toUpperCase() + lastName[0].toUpperCase();
}

console.log(getInitials('Hikmet', 'Demirci'));

// 🧩 Challenge 3: Arrow Function in a Method (Hard)
// You have a person object. Add a method called sayHello using an arrow function inside it. Then explain what happens.
// const person = {
//   name: 'Hikmet',
//   sayHello: // your arrow function here
// };
// ➡️ Call person.sayHello() and observe the behavior. Why does this happen?

const person = {
  name: 'Hikmet',
  sayHello: function () { return `Hello, ${this.name}` }
}

console.log(person.sayHello());

// 💥 Capstone Challenge: Profile Summary with Arrow Functions & JSON (Advanced)
// Create a user object with:

// firstName, lastName, birthYear, and hobbies (array)

// Add a method getSummary (use arrow function) that returns a string like:
// Name: Hikmet Demirci, Age: 46, Hobbies: football, coding
// Convert the object to JSON and back using JSON.stringify and JSON.parse.

// 🔁 Output the summary from both the original and the parsed objects.

const person1 = {
  firstName: 'Hikmet',
  lastName: 'Demirci',
  age: 46,
  hobbies: ['football', 'coding'],
  getSummary: function () {
    return `Name: ${this.firstName} ${this.lastName}, Age: ${this.age}, Hobbies: ${this.hobbies.join(', ')}`;
  }
};

console.log(person1.getSummary());
