const library = [
  {
    tile: 'Atomic Habits',
    author: 'James Clear',
    status: {
      own: true,
      reading: true,
      read: false
    }
  },
  {
    tile: 'Deep Work',
    author: 'Carl Newport',
    status: {
      own: true,
      reading: false,
      read: true
    },
  },
  {
    tile: 'Clean Code',
    author: 'Robert C. Martin',
    status: {
      own: false,
      reading: false,
      read: false
    }
  },
]

// set the read value to all of them to true
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);

// Destructure the title from the first book raname the variable to firstBook
// Destructure from the correct array
const { title: firstBook } = library[0];

console.log(firstBook); // ✅ Atomic Habits