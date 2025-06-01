// 🧩 Challenge 1: Basic OR Logic
// Task: Write a function getDisplayName(userName) that returns
// the provided userName. If no userName is passed (or it's a falsy value), return "Guest".

// Example:
// getDisplayName('Hikmet') // → 'Hikmet'
// getDisplayName('')       // → 'Guest'

function getDisplayName(username) {
  if (Object.keys(username).length > 0) {
    console.log(username);
  } else {
    console.log('Guest');
  }
}

getDisplayName('')

// 🧩 Challenge 2: AND + NOT
// Task: Write a function canVote(age, citizen) that returns true if
// the person is 18 or older AND a citizen, otherwise false.

// Example:
//  canVote(20, true)  // → true
//  canVote(17, true)  // → false
//  canVote(20, false) // → false

function canVote(age, citizen) {

  if (age >= 18 && citizen) {
    console.log('Person can vote.');
  } else {
    console.log('Sorry can\'t vote');
  }
}

canVote(20, false)

// 🧩 Challenge 3: Complex Condition with Ternary
// Task: Write a function accessLevel(role) that uses a ternary operator to return:

// "Admin Access" if role is "admin",

// "User Access" if role is "user",

// "Guest Access" otherwise.

// Example:
// accessLevel('admin')  // → 'Admin Access'
// accessLevel('user')   // → 'User Access'
// accessLevel('other')  // → 'Guest Access'

function accessLevel(role) {
  return role === 'admin'
    ? 'Admin Access'
    : role === 'user'
      ? 'User Access'
      : 'Guest Access';
}

console.log(accessLevel('user')); // 'User Access'

// 🧩 Challenge 4: Combining Logic in Object Method
// Task: Create an object account with the following properties:

// username, password, isLoggedIn

// A method checkAccess() that returns "Access granted" if isLoggedIn
// is true and password.length >= 6, otherwise "Access denied".

// Bonus: Use this inside the method.

const account = {
  username: 'Hiko',
  password: 'password',
  isLoggedIn: true
}

function checkAccess() {
  if (account.password.length >= 6 && account.isLoggedIn) {
    console.log('Access Granted');
  } else {
    console.log('Access Denied');
  }
}

checkAccess();


// 💎 Capstone 1: User Profile Manager
// Background:
// You’re building a profile system for a social media site.

// Task:
//  * Create an object userProfile with:
//  * firstName, lastName, birthYear, email, hobbies, isActive
//  * Method getFullName() that returns full name
//  * Method getAge() that returns age based on birthYear
//  * Method getSummary() that returns:
//  "Ahmet Yilmaz | Age: 45 | Active: true | Hobbies: Football, Reading"

// Use logical operators in getSummary() to show "Active: false" if the user isn’t active.


const userProfile = {
  firstName: 'Ahmet',
  lastName: 'Yilmaz',
  birthYear: 1980,
  email: 'a.yilmaz@email.com',
  hobbies: ['Football', 'Reading'],
  isActive: true,
  getFullname: function () {
    return `${this.firstName} ${this.lastName}`
  },
  getAge: function () {
    const date = new Date()
    const year = date.getFullYear()

    return year - this.birthYear
  },
  getSummary: function () {
    return `${this.getFullname()} | Age: ${this.getAge()} | Active: ${this.isActive} | Hobbies: ${this.hobbies.join(', ')}`
  }
}


console.log(userProfile.getSummary());

// 💎 Capstone 2: Real-World App — Smart Login Validator
// Background:
// You're building a login validator for a simple app.

// Task:
//  * Create a function validateLogin(username, password, isAdmin) that:
//  * Returns "Login success" if username and password are non-empty strings and password length is at least 6
//  * If isAdmin is true, also check that the username starts with "admin_" using .startsWith()
//  * Otherwise, return appropriate failure message

// Example:
// validateLogin("admin_john", "pass123", true)  // "Login success"
// validateLogin("user", "123", false)           // "Password too short"
// validateLogin("john", "", false)              // "Username and password required"

function validateLogin(username, password, isAdmin) {
  if (username.length === 0 || password.length === 0) {
    console.log('Username and password are required');
  } else if (password.length < 6) {
    console.log('Password too short');
  } else if (isAdmin && username.startsWith('admin_')) {
    console.log('Admin login success');
  } else {
    console.log('Login success');
  }
}

validateLogin('user', '', false);        // ➜ Username and password are required
validateLogin('user', '123', false);     // ➜ Password too short
validateLogin('admin_Hikmet', '123456', true); // ➜ Admin login success
validateLogin('hikmet', '123456', false);     // ➜ Login success