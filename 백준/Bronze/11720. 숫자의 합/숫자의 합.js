const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const [N_STR, numbersStr] = input.split('\n');

let sum = 0;
for (let i = 0; i < numbersStr.length; i += 1) {
  const number = parseInt(numbersStr[i], 10);
  sum += number;
}
console.log(sum);
