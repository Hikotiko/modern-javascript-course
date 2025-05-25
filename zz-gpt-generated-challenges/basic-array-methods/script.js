// Challenge 1
// Create a new array that contains "green" and
// "yellow" from the original array using indexing

let colors = ['red', 'green', 'blue', 'yellow'];

let newArray;

newArray = [colors[1], colors[3]];

console.log(newArray);

// Challenge 2
// 1. Change "cat" to "hamster" using indexing.
// 2. Add "parrot" and "fish" to the array using .push.
// Expected: ["dog", "hamster", "parrot", "fish"]

let animals = ['dog', 'cat'];

animals[1] = 'hamster';
animals.push('parrot', 'fish');

console.log(animals);

// Challenge 3
// Create a new array that contains the same numbers in sorted order: [1, 2, 3]
// (You can’t use .sort() yet — just manually build the new array using indices.)

let numbers = [3, 1, 2];

let sortedArray = [numbers[1], numbers[2], numbers[0]];

console.log(sortedArray);
