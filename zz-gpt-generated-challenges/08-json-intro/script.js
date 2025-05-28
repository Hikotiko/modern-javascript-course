// 🧩 Challenge 1: Convert Object to JSON (Easy)
// Create a car object with these properties:

// make (string)

// model (string)

// year (number)

// features (array of strings)

// Convert the object to a JSON string and log it.

const car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2015,
  features: ["Airconditioning", "Cruise Control"]
};

const carJSON = JSON.stringify(car)

console.log(carJSON);

// 🧩 Challenge 2: Parse JSON String (Medium)
// Given the following JSON string:
// const jsonStr = '{"username":"hikmet_d","isAdmin":false,"roles":["viewer","editor"]}';
// Parse it into an object.
// Log the username and the second role.

const jsonStr = '{"username":"hikmet_d","isAdmin":false,"roles":["viewer","editor"]}';

const parsed = JSON.parse(jsonStr);
console.log(parsed.username);
console.log(parsed.roles[1]);

// 🧩 Challenge 3: Array of JSON Strings (Hard)
// You're given this array of JSON strings representing products:


// 1. Convert each string to a JavaScript object.

// 2. Store them in a new array.

// 3. Loop through the array and log each product's name and price.

const productList = [
  '{"id":1,"name":"Laptop","price":1299.99}',
  '{"id":2,"name":"Phone","price":699.99}',
  '{"id":3,"name":"Tablet","price":499.99}'
];

// Step 1 & 2: Parse each JSON string and store in a new array
const products = productList.map(item => JSON.parse(item));

// Step 3: Log each product's name and price
products.forEach(product => {
  console.log(`Name: ${product.name}, Price: $${product.price}`);
})

// 🧠 Capstone Challenge: Full-Profile JSON Roundtrip
// Build a small console-based script that does the following:

// 1. Create a userProfile object with:

//  - firstName (string)
//  - lastName (string)
//  - email (string)
//  - birthYear (number)
//  - hobbies (array of strings)
//  - A method getFullName() that returns a properly capitalized full name.

// 2. Convert userProfile to a JSON string.

// 3. Parse the JSON string back into a new object parsedProfile.

// Add a new hobby to parsedProfile.hobbies.

// Log:

// The original JSON string

// The updated parsedProfile object

// Reattach and use a getFullName() method on parsedProfile to log the full name.

// Original object
const userProfile = {
  firstName: 'Hikmet',
  lastName: 'Demirci',
  email: 'hikmet.demirci@gmail.com',
  birthyear: 1978,
  hobbies: ['Football', 'Programming'],
  getFullName: function () {
    const firstNameCap = this.firstName[0].toUpperCase() + this.firstName.slice(1);
    const lastNameCap = this.lastName[0].toUpperCase() + this.lastName.slice(1);
    return `${firstNameCap} ${lastNameCap}`;
  }
};

// Convert to JSON string
const userProfileJson = JSON.stringify(userProfile);

// Log JSON string
console.log('JSON String:', userProfileJson);

// Parse back to object
const parsedProfile = JSON.parse(userProfileJson);

// Add new hobby
parsedProfile.hobbies.push('Music');

// Reattach method
parsedProfile.getFullName = function () {
  const firstNameCap = this.firstName[0].toUpperCase() + this.firstName.slice(1);
  const lastNameCap = this.lastName[0].toUpperCase() + this.lastName.slice(1);
  return `${firstNameCap} ${lastNameCap}`;
};

// Logs
console.log('Updated Parsed Profile:', parsedProfile);
console.log('Full Name from Parsed Profile:', parsedProfile.getFullName());

