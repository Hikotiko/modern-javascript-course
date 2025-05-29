// // 🧩 Challenge 1: Basic Understanding (Easy)
// // Task: Log the current execution context.
// //  * Create a function called logContext that logs the current execution context
// //    (i.e., a message that helps demonstrate it's inside a function).
// //  * Call the function and log something outside of it as well.

// console.log('🌍 This is the Global Execution Context');

// function logContext() {
//   console.log('🔁 Now inside the Function Execution Context');
// }

// logContext()


// 🧩 Challenge 2: Execution Stack Order (Medium)
// Task: Nest multiple function calls and log their execution order.
//  * Create three functions: first(), second(), and third().
//  * Each should log when it starts and ends.
//  * Call them in a nested fashion and observe the execution flow.

function first() {
  console.log('first function has run!');

  function second() {

    console.log('second function has run!');

    function third() {
      console.log('Third function has run!');
    }
    third()

  }
  second()
}
first()

// 🧩 Challenge 3: Variable Hoisting (Hard)
// Task: Demonstrate variable hoisting.
//  * Create a function where you try to use a variable before it's declared with var.
//  * Explain the behavior in a comment.

function func1() {
  console.log(`My name is: `);

  var name = 'Hikmet'

}

func1()

// The variable is not logged because it is an empty value when the log is executed
// the variable gets a value assigned after the log has executed.


// 🧩 Challenge 4: Scope vs Execution Context (Very Hard)
// Task: Demonstrate the difference between scope and execution context.
//  * Create a function with a nested function and use console.log to show variable access.
//  * Comment which part belongs to scope and which to execution context.

function first() {
  const firstName = 'Hikmet';  // Scoped within first() and nested functions
  console.log(firstName);

  function second() {
    const lastName = 'Demirci';  // Scoped within second() only
    console.log(lastName);

    // console.log(object); // Removed to avoid ReferenceError
  }
  second();
}

first();


// 💡 Capstone Project 1: Feature-Rich User Summary Tool
// Description:
// Combine objects, methods, arrow functions, scope, hoisting, and execution context into a meaningful summary tool.

// Requirements:
//  * A user object with at least 5 properties and 3 methods (getFullName, getAge, getSummary).
//  * Use at least one arrow function and one regular function.
//  * Call all methods from within a function to simulate the execution context stack.
//  * Use IIFE to immediately summarize the user on file load.

const user = {
  id: 12345,
  firstName: 'Ahmet',
  lastName: 'Yilmaz',
  birthYear: 1980,
  email: 'ay@email.com',
  isActive: true,
  hobbies: ['Football', 'Reading', 'Swimming'],

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  getAge() {
    const date = new Date();
    const year = date.getFullYear();
    return year - this.birthYear;
  },

  summary() {
    return `Name: ${this.getFullName()} | Age: ${this.getAge()} | Hobbies: ${this.hobbies.join(', ')}`;
  }
};

console.log(user.getFullName());
console.log(user.getAge());
console.log(user.summary());


// 🌍 Capstone Project 2: Real-World Mini App — “Library Tracker”
// Background:
// You’re managing a mini digital library and need to track users and their checked-out books.

// Features:
//  * Define a User object that includes name, age, and checked-out books (array).
//  * Define a Book object that includes title, author, and status.
//  * Use a function to "check out" a book (push it to the user’s list and change status).
//  * Use IIFE and nested function calls to simulate a checkout process.
//  * Highlight execution order and scope of variables.

// Benefits:
//  * Demonstrates mastery of JavaScript fundamentals.
//  * Reinforces real-world modeling (users/books).
//  * Shows understanding of execution context and scope.

// Step 1: Books objects
// Step 1: Define Book objects
const book1 = { title: "1984", author: "George Orwell", status: "available" };
const book2 = { title: "Sineklerin Tanrısı", author: "William Golding", status: "available" };
const book3 = { title: "Suç ve Ceza", author: "Dostoyevski", status: "available" };

// Step 2: Define User objects
const user1 = {
  name: "Ahmet Yılmaz",
  age: 32,
  checkedOutBooks: []
};

const user2 = {
  name: "Elif Demir",
  age: 25,
  checkedOutBooks: []
};

// Step 3: Function to check out a book
function checkOutBook(user, book) {
  if (book.status === "available") {
    book.status = "checked out";
    user.checkedOutBooks.push(book.title);
    console.log(`${user.name} checked out "${book.title}"`);
  } else {
    console.log(`Sorry, "${book.title}" is already checked out.`);
  }
}

// Step 4: Function to return a book
function returnBook(user, book) {
  const index = user.checkedOutBooks.indexOf(book.title);
  if (index !== -1) {
    user.checkedOutBooks.splice(index, 1);
    book.status = "available";
    console.log(`${user.name} returned "${book.title}"`);
  } else {
    console.log(`${user.name} does not have "${book.title}" checked out.`);
  }
}

// ✅ Test the system:
checkOutBook(user1, book1); // Ahmet Yılmaz checked out "1984"
checkOutBook(user2, book1); // Sorry, already checked out

returnBook(user1, book1);   // Ahmet Yılmaz returned "1984"
checkOutBook(user2, book1); // Elif Demir checked out "1984"

console.log(user1);
console.log(user2);
console.log(book1);



