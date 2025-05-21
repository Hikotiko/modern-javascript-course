let x;
const name = 'John';
const age = 30;

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.';

// Template literals
x = `Hello, my name is ${name} and I am ${age} years`;

// String Properties and methods
const s = 'Hello World';

x = typeof s;

x = s.length;

// Access value by index/key
x = s[1];
x = s.charAt(0);

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.indexOf('W');

x = s.substring(0, 4);

x = s.slice(0, 5);

x = s.replace('World', 'John');

x = s.includes('Heli');

x = s.valueOf();

// Create an array by seperator
x = s.split('');

console.log(x);
