//----------------------------------------------------------------------------//
// Primitive Types: Stored directly in the "stack" and accessed directly.     //
// String | Number | Boolean | Null | Undefined | Symbol | BigInt             //
//                                                                            //
// Reference Types: Stored in the heap and access by reference.               //
// Arrays | Functions | Objects                                               //
//----------------------------------------------------------------------------//



// Stored on the stack
const name = 'John';
const age = 30;

// Reference values store on the heap
const person = {
    name: 'Brad',
    age: 40,
}

let newName = name;
newName = 'Jonathan';

let newPerson = person;
newPerson.name = 'Bradley'

console.log(name, newName);
console.log(person, newPerson);