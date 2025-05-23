let x;
let y;

x = Math.round(Math.random() * 100 + 1);
y = Math.round(Math.random() * 100 + 1);

// to test the expected results
// x = 31;
// y = 15;

sumOutput = x + y;
differenceOutput = x - y;
productOutput = x * y;
quotiontOutput = x / y;
rmOutput = x % y;

console.log(`${x} + ${y} = ${sumOutput}`);
console.log(`${x} - ${y} = ${differenceOutput}`);
console.log(`${x} x ${y} = ${productOutput}`);
console.log(`${x} / ${y} = ${quotiontOutput}`);
console.log(`${x} % ${y} = ${rmOutput}`);
