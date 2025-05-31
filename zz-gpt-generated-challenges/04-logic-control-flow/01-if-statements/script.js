// 🧩 Challenge 1: Basic Condition
// Task:
// Write a function that checks if a number is positive and logs "Positive number" if true.// function checkPositive(num) {
//   // Your code here
// }
// checkPositive(5); // ➝ Positive number

function checkPositive(num) {

  if (num > 0) {
    console.log(`${num} is a Positive number`);

  } else {
    console.log(`${num} is a Negative number`);
  }
};

checkPositive(-7)

// 🧩 Challenge 2: Else Condition
// Task:
// Write a function that checks if a number is positive or negative.
// function checkNumber(num) {
//   // Your code here
// }
// checkNumber(-2); // ➝ Negative number

function checkNumber(num) {

  if (num > 0) {
    console.log('Positive number');
  } else if (num < 0) {
    console.log('Negative number');
  } else if (num === 0) {
    console.log('Zero');
  }

};

checkNumber(0);

// 🧩 Challenge 4: String Comparison
// Task:
// Write a function that checks if a user's role is "admin", "editor", or "viewer" and logs appropriate access level.
// function checkRole(role) {
//   // Your code here
// }
// checkRole("editor"); // ➝ Editor access

function checkRole(role) {
  const person = {
    name: "Hikmet",
    role: "editor"
  }



  if (person.role === role) {
    console.log(`${role} access`);
  } else {
    console.log(`${role} not granted`);
  }
}

checkRole("editor");

// 🏁 Capstone Challenge 1: All-in-One
// Task:
// Write a function that takes a user object and logs their access:

// function accessControl(user) {
//   // user = { name: 'Hikmet', age: 30, role: 'admin' }
//   // Your code here
// }

// If age < 18 ➝ "Access denied"
// Else if role is "admin" ➝ "Full access"
// Else if role is "editor" ➝ "Limited access"
// Else ➝ "View only"

function accessControl(user) {


  if (user.age < 18) {
    console.log('Access Denied');
  } else if (user.role === 'admin') {
    console.log('Full Access');
  } else if (user.role === 'editor') {
    console.log('Limited access');
  } else console.log('View only');
}

const user = [{ name: 'Hikmet', age: 47, role: 'admin' },
{ name: 'Ali', age: 16, role: 'viewer' },
{ name: 'Mehmet', age: 21, role: 'editor' }
]

// user.forEach(accessControl(user[2]))

// 🛠 Capstone Challenge 2: Real-World Scenario
// Task:
// You’re validating a login form. Check if username and password are both non-empty strings:

// function validateLogin(username, password) {
//   // Your code here
// }

// If either is empty ➝ log "Missing credentials"
// If both are filled ➝ log "Login successful"

function validateLogin(username, password) {
  const storedUsername = 'hikmet';
  const storedPassword = 'test';

  if (!username || !password) {
    console.log('❌ Missing credentials');
  } else if (username === storedUsername && password === storedPassword) {
    console.log('✅ Login successful');
  } else {
    console.log('❌ Invalid username or password');
  }
}

validateLogin('hikmet', 'test'); // ✅ Login successful
