// Challenge 1

const getCelcius = f => (f - 32) * 5 / 9

console.log(`The temperature is ${getCelcius(90)} \xB0C`);

// Challenge 2
function minMax(arr) {
  const min = Math.min(...arr)
  const max = Math.max(...arr)
  return {
    min,
    max
  }
}

console.log(minMax([5, 4, 3, 2, 7, 9]));

((length, width) => {
  const area = length * width

  const output = `The area of a rectangle of ${length} and a width of ${width} is ${area}`

  console.log(output);

}

)(10, 20)