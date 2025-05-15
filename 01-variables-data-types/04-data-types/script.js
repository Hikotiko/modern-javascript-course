// Primitive Data Types
// String - sequence of charachters. Must be in quotes or backticks
// Number - Integers as wel as floating-points numbers
// Boolean - Logical entity / true or false
// Null - Intentional absence of any object value
// Undefined - A variable has not yet been defined / assigned
// Symbol - Built-in object whose constuctor returns a unique symbol
// BigInt - Numbers that are greate than the "number" type

// Reference Types (objects)
// Reference types or "objecst" are a non-primitive value and when assigned
// to a variable, the variable is given a reference to that value.
//
// Object literals, arrays, and function are all reference types

// String
const firstName = 'Sara'

// Number
const age = 30;

// Boolean
const hasKids = true;

// Null
const aptNumber = null;  // typeof result for the null value is object this is a bug.

// Undefined
let score;
const score1 = undefined;

// BigIng
const n = 98022342354235432543n

// Symbol
const id = Symbol('id')


// Reference Types
const numbers = [1,2,3,4]

const person = {
   name: 'Hikmet',
}

function sayHello() {
   console.log('Hello');
}



// change the variable name to see the result of log output
const output = sayHello;




console.log(output, typeof output);

