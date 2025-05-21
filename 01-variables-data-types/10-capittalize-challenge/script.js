let myString = 'developer';

let myNewString;

// Solution 1:
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

// Solution 2:
myNewString = myString[0].toUpperCase() + myString.substring(1);

// Solution 3:
myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;

// GPT suggestion with function
function capitalizeFirstLetter(str) {
  if (typeof str !== 'string' || str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// let myNewString = capitalizeFirstLetter(myString);

console.log(myNewString);
