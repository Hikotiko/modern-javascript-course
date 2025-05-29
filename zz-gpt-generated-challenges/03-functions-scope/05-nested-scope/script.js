// 🔹 Challenge 1: Basic Nesting (Easy)
// Create a function called outer that defines a variable outerVar set to "I'm outside!".
// Inside it, define another function called inner that logs outerVar to the console.
// Call the inner function from within outer, and then call outer.

function outer() {
  const outerVar = "I'm outside!";

  function inner() {
    console.log(outerVar);
  }

  inner(); // Call the inner function from within outer
}

outer(); // Call the outer function

// 🔸 Challenge 2: Nested Scope Chain (Medium)
// Create a function called grandParent that defines a variable familyName as "Smith".
// Inside it, define a function parent, which defines firstName as "John", and within that
// a function child that logs the full name using both variables.
// Expected output:\
// Full name: John Smith
// Call grandParent() to run the entire chain.

function grandParent() {
  const familyName = 'Smith';

  function parent() {
    const firstName = 'John';

    function child() {
      console.log(`Full Name: ${firstName} ${familyName}`);
    }
    child()
  }
  parent()
}

grandParent()

// 🎓 Capstone Challenge: Scope, Functions, JSON
// You're given a JSON string representing a user's profile. It contains:
// firstName
// lastName
// birthYear
// hobbies (array)

// Task:
// 1. Parse the JSON string into an object.

// 2.  Create a function buildProfile() with nested functions:

// formatName() – capitalizes the name.

// calculateAge() – returns age.

// printProfile() – logs full summary.

// Call only buildProfile() to trigger everything.

// Here's the JSON string to use:
// const userJSON = '{"firstName":"sara","lastName":"lee","birthYear":1995,"hobbies":["baking","hiking"]}';

// Expected Output:
// Full Name: Sara Lee
// Age: [calculated]
// Hobbies: baking, hiking

const userProfile = [
  {
    "firstName": "Hikmet",
    "lastName": "Demirci",
    "birthYear": 1978,
    "hobbies": ["football", "running"]
  },
  {
    "firstName": "Kader",
    "lastName": "Demirci",
    "birthYear": 1984,
    "hobbies": ["football", "running"]
  }
];

let userProfileString = JSON.stringify(userProfile);

function buildProfile() {
  const parsedProfile = JSON.parse(userProfileString)[0]; // ✅ Access first item in array

  function formatName() {
    const fullName =
      parsedProfile.firstName[0].toUpperCase() + parsedProfile.firstName.slice(1) + ' ' +
      parsedProfile.lastName[0].toUpperCase() + parsedProfile.lastName.slice(1);

    console.log(`Full Name: ${fullName}`);

    function calculateAge() {
      const age = new Date().getFullYear() - parsedProfile.birthYear;
      console.log(`Age: ${age}`);
    }

    calculateAge();
  }

  formatName();
}

buildProfile();
