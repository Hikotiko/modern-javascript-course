const arr = [1, 2, 3, 4, 5];

let x;

// Challenge 1

arr.reverse().push(0);
arr.unshift(6);

console.log(arr, typeof x);

// Challenge 2
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

let y;

y = arr1.concat(arr2.splice(1));

console.log(y);
