// CHallenge 1
// 🔹 Challenge 1: Basic Array Info (Easy)
// Objective: Create an array of your five favorite foods.

// Print the length of the array.

// Print the first and last food using array indexing.

// Add a new food to the array using the spread operator.

// <details> <summary>💡 Hint</summary> Use `foods.length`, `foods[0]`, `foods[foods.length - 1]`, and `[...foods, 'newFood']`. </details>

let favoriteFoods = ['Karniyarik', 'Iskender', 'Tandir Kebabi', 'Izgara', 'Dolma']

let lengthArray = favoriteFoods.length;
let firstFood = favoriteFoods[0]
let lastFood = favoriteFoods[favoriteFoods.length - 1]

favoriteFoods.push('Hunkar begendi')
let addFood = ['Adana']

favoriteFoods.unshift(...favoriteFoods, ...addFood)


console.log(lengthArray);
console.log(firstFood, lastFood);
console.log(favoriteFoods);

// 🔹 Challenge 2: Object and Destructuring (Medium)
// Objective: Create an object representing a book with properties: title, author, pages, and genres (an array).

// Print the book title using dot notation.

// Use object destructuring to extract and print title and author.

// Add a method getSummary() that returns a string with the book title and author.

// <details> <summary>💡 Hint</summary> Use object literal syntax and a method like `getSummary() { return \`\${this.title} by \${this.author}\`; }`. </details>

let book = {
  title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
  author: 'Robert C. Martin',
  pages: 464,
  genres:
    ['Programming', 'Software Engineering', 'Computer Science', 'Technology', 'Non-fiction'],
  summary: function () { console.log(`Title: ${this.title} Author: ${this.author}`) }
}


let { title, author } = book

book.getSummary = function () {
  console.log(`Title: ${this.title} Author: ${this.author}`);
}

console.log(`Title: ${title} Author: ${author}`);
book.getSummary()
book.summary()


// 🔹 Challenge 3: Nested Data and Spread (Hard)
// Objective:
// Create two objects representing users with properties: name, email, favorites (array of numbers).

// Merge the two objects into one using the spread operator, nesting both users under users.

// Extract the names using destructuring.

// Create a new array combining all favorite numbers.

// <details> <summary>💡 Hint</summary> Use nested destructuring and array spreading: `[...user1.favorites, ...user2.favorites]`. </details>

let user1 = {
  name: 'John Doe',
  email: 'jd@mail.com',
  favorites: [10, 14, 7]
};

let user2 = {
  name: 'Jane Doe',
  email: 'janed@mail.com',
  favorites: [11, 9, 12]
};

// Merge both users into one object with nesting
const users = { user1, user2 };

// Destructure names
const { user1: { name: name1 }, user2: { name: name2 } } = users;

// Combine favorites
const combinedFavorites = [...user1.favorites, ...user2.favorites];

console.log(users);
console.log('Names:', name1, name2);
console.log('Combined favorites:', combinedFavorites);


// 🔹 Capstone Challenge: Mini Profile Generator
// Objective: Combine arrays, objects, string methods, and number/date formatting to create a dynamic user profile summary.

// Steps:

// Create a user object with:

// firstName, lastName, birthYear, hobbies (array), email.

// Use a method getFullName() to return the capitalized full name.

// Calculate the user's age from their birth year.

// Use destructuring to extract values.

// Format and print a profile summary like:

let user = {
  firstName: 'John',
  lastName: 'Doe',
  birthYear: 1988,
  email: 'john@email.com',
  hobbies: ['Reading', 'Cycling', 'Musing'],
  getFullName: function () {
    console.log(this.firstName.charAt(0).toUpperCase() + this.firstName.slice(1) +
      ' ' + this.lastName.charAt(0).toUpperCase() + this.lastName.slice(1));
  },


};

let currentDate = new Date(Date.now())
console.log(getFullYear(currentDate));




user.getFullName()
console.log(currentDate);