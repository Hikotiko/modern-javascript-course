// Ways to declare variables
// var, let, const

let firstName = 'Hikmet'
let lastName = 'Demirci'

console.log(firstName, lastName);

let age = 30;

console.log(age);

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// Re-assigning Variables
age = 31;

console.log(age);

// Initialise without assigning
let score;

score = 1;

console.log(score);

if (true) {
   score = score +1
}

console.log(score);

// const can't be re-assigned
const x = 100;

const arr = [1,2,3,4]


// cannot be re-assigned
//arr = [1,2,3,4,5]

// arr has methods which can alter the value

arr.push(5)
console.log(arr);

// attributes of const variables can be reassigned
const person = {
   name: 'Brad'
};

person.name = 'John'
person.email = 'john@gemail.com'
console.log(person);

// declare multiple variables

let a,b,c;

console.log(a);   //result will be undefined

a = 10

console.log(a); // result will be 10