// Create an object named person with the following properties:

//     name: "Alice"

//     age: 25

//     city: "New York"

// Task:
// Use console.log(person) to display the object.

const person = {
  name: 'Alice',
  age: 25,
  city: 'New York',
};

console.log(person);

// Given this object:

// let car = {
//   brand: "Toyota",
//   year: 2015,
//   color: "red"
// };

// Tasks:

//     Change the color to "blue"

//     Add a new property model with the value "Corolla"

//     Log the updated object

let car = {
  brand: 'Toyota',
  year: 2015,
  color: 'red',
};

car.color = 'blue';
car.model = 'Corolla';

console.log(car);

// You are given this object:

// let student = {
//   name: "John",
//   grades: {
//     math: 90,
//     english: 85
//   }
// };

// Tasks:

//     Access and log the math grade

//     Change the English grade to 88

//     Add a new subject grade: science: 92 under grades

//     Log the updated grades object
let student = {
  name: 'John',
  grades: {
    math: 90,
    english: 85,
  },
};

console.log(student.grades.english);

student.grades.english = 88;
student.grades.science = 92;

console.log(student.grades);
