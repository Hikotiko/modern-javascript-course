// 🧩 Chapter Challenges — Functions
// 🔹 Challenge 1: Greeting Function (Easy)
// Create a function called greetUser that takes one parameter, name, and logs:
// Hello, <name>! Welcome.
// Example:
// greetUser('Hikmet') ➞ "Hello, Hikmet! Welcome."

function greetUser(name) {
  return `Hello, ${name}! Welcome.`
}



console.log(greetUser('Hikmet'));

// 🔹 Challenge 2: Calculate Area (Medium)
// Create a function calculateArea that takes two parameters: width and height, and returns the area of a rectangle.

// Example:
// calculateArea(5, 3) ➞ 15

function calculateArea(l, w) {
  return l * w
};

console.log(calculateArea(5, 3));

// 🔹 Challenge 3: Is Adult (Harder)
// Create a function isAdult that takes an age as a parameter and returns:

// "Adult" if age is 18 or more

// "Minor" if under 18

// Example:
// isAdult(21) ➞ "Adult"
// isAdult(12) ➞ "Minor"

function isAdult(age) {
  if (age < 18) {
    return 'Minor'

  } else {
    return 'Adult'
  }
};

// ternary
function isAdultImproved(age) {
  return age >= 18 ? 'Adult' : 'Minor';
}

console.log(isAdult(15));
console.log(isAdultImproved(15));

// 🧩 Capstone Challenge — Mix of All Chapters
// 🔹 Capstone: User Summary JSON Generator
// Create a user object with firstName, lastName, birthYear, and hobbies (array).

// Write a function getSummary(user) that:

// Returns full name capitalized

// Calculates age using Date

// Returns a JSON string with name, age, and hobbies

// Example Output (in JSON):
// {
//   "fullName": "John Doe",
//   "age": 30,
//   "hobbies": ["Reading", "Gaming"]
// }

const user = {
  firstName: 'Hikmet',
  lastName: 'Demirci',
  birthYear: 1978,
  hobbies: [],
  getSummary: function () {
    // Capitalize name
    const firstNameCap = this.firstName[0].toUpperCase() + this.firstName.slice(1);
    const lastNameCap = this.lastName[0].toUpperCase() + this.lastName.slice(1);

    // Calculate age correctly
    const currentYear = new Date().getFullYear();
    const age = currentYear - this.birthYear;

    return `Full Name: ${firstNameCap} ${lastNameCap}\nAge: ${age}`;
  }
};

console.log(user.getSummary());
