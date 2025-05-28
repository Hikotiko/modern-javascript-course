function registerUser(user = 'Bot') {    // by assigning a value here ve pass a default value

  // The old way of declaring a default value if none is provided
  // if (!user) {
  //   user = 'Bot'
  // }

  return user + ' is registered';
};

console.log(registerUser());

// Rest Params
function sum(...numbers) {   // the ...numbers is any number of parameters provided.
  let total = 0;

  for (const num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7));

// Objects as params
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in`;
};

const user = {
  id: 1,
  name: 'John',
};

console.log(loginUser(user));
console.log(loginUser(
  {
    id: 2,
    name: 'Sara'
  }
));

// Arrays as params
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length)
  const item = arr[randomIndex]

  console.log(item)
}

getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);