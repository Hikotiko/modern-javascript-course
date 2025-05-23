const arr = [34, 55, 95, 20, 15];

arr.push(100); // add a value to the array

arr.pop(); // removes the last value in the array

arr.unshift(99); // add value to the 0 index of the array

arr.shift(); // takes value of the begin of the array

arr.reverse();

x = arr.includes(26); // checks if the array has the value

x = arr.indexOf(15);

x = arr.slice(1, 4); // returns partial array from start to end

// x = arr.splice(1, 4);

x = arr.slice(1, 4).reverse().toString(); // get part of array, reverse it, convert to string

console.log(x);
