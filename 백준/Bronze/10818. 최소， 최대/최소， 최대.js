const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const [N, numbersStr] = input.trim().split('\n');
const numbers = numbersStr
  .split(' ')
  .map((numberStr) => parseInt(numberStr, 10));

console.log(Math.min(...numbers), Math.max(...numbers));
