const fs = require('fs');

// Making a synchronous read
const readText = fs.readFileSync('./input.txt').toString();

console.time();
let count = 0;
let i = 1;
let first = false;

for (c of readText) {
  if (c === '(') count++;
  else if (c === ')') count--;

  if (count == -1 && !first) {
    console.log(i);
    first = true;
  }

  i++;
}

console.log(`The instructions take santa to the floor: ${count}`);
console.timeEnd();
